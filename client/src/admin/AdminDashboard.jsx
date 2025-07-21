

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Plus, Edit, Trash2, Eye, Calendar, User, LogOut, Search, Filter, X, Hamburger, Menu, EyeOff } from 'lucide-react';
  import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAllBlogs, setLoadin } from '../redux/blogSlice';
import { useNavigate } from 'react-router-dom';
import { setAllUsers, setLoading, setUser } from '../redux/authSlice';
import { toast } from 'react-toastify';
import { FaSpinner } from "react-icons/fa";

const AdminDashboard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showAdminDeleteModal, setShowAdminDeleteModal] = useState(false);
const [adminToDelete, setAdminToDelete] = useState(null);
  const { allBlogs = [],loadin } = useSelector((state) => state.blog);

  const isLoading = useSelector((state) => state.auth.loading);
  const [blogForm, setBlogForm] = useState({
    title: '',
    content: '',
    imageUrl: '',
  });
const [showModal, setShowModal] = useState(false);
const [formData, setFormData] = useState({
  email: "",
  password: ""
});

const { allUsers = [] } = useSelector((state) => state.auth);



const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Initialize an array for all months with 0 blogs
const chartData = Array.from({ length: 12 }, (_, i) => ({
  name: monthNames[i],
  blogs: 0,
}));

// Count blogs by month
allBlogs.forEach(post => {
  const month = new Date(post.createdAt).getMonth(); // 0-based month index
  chartData[month].blogs += 1;
});




const pieData = [
  { name: 'Published', value: allBlogs.length, color: '#10b981' },
  { name: 'Admins', value: allUsers.length, color: '#3b82f6' }
];


console.log(allBlogs);



  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadImageUrl, setUploadedImageUrl] = useState(null);
  
  // Modal and edit states
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState(null);

  const inputFileChange = useCallback((e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
      console.log("Selected file:", file);
    } else {
      setSelectedImage(null);
      setImagePreview(null);
      console.warn("No file selected");
    }
  }, []);

  const uploadImageToClodinary = useCallback(async () => {
    const data = new FormData();
    data.append('my_file', selectedImage);
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/blog/upload-image`,
      data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    console.log(response, "response");

    if (response.data.success) {
      setUploadedImageUrl(response.data.result.url);
    }
  }, [selectedImage]);

  console.log(uploadImageUrl);
  
  useEffect(() => {
    if (selectedImage) {
      uploadImageToClodinary();
    }
  }, [selectedImage, uploadImageToClodinary]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setBlogForm(prev => ({ ...prev, [name]: value }));
  }, []);


        const fetchAllAdmins = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/getAllUsers`, {
      withCredentials: true,
    });
    if (res.data.success) {
      dispatch(setAllUsers(res.data.users));
      
    }
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => { 
  fetchAllAdmins();
}, [dispatch]);




const removeAdmin = async () => {
  if (!adminToDelete) return;
  
  dispatch(setLoading(true));
  try {
    const res = await axios.delete(`${import.meta.env.VITE_API_URL}/api/user/deleteUser/${adminToDelete}`, {
      withCredentials: true,
    });
    
    if (res.data.success) {
      const updatedUsers = allUsers.filter(user => user._id !== adminToDelete);
      dispatch(setAllUsers(updatedUsers));
     toast.success('Admin Deleted Successfully');
      setShowAdminDeleteModal(false);
    }
  } catch (error) {
    console.error(error.message);
    toast.error(error.response?.data?.message || 'Failed To Delete Admin');
  } finally {
    dispatch(setLoading(false));
    setAdminToDelete(null);
  }
};

const showDeleteAdminConfirmation = (userId) => {
  setAdminToDelete(userId);
  setShowAdminDeleteModal(true);
};
  const handleAddAdmin = async (e) => {
         e.preventDefault();
  try {
    dispatch(setLoading(true)); // Correct spelling

    const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/user/admin-register`, formData, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });

   if (res.data.success) {
      // Add new client to state
      dispatch(setAllUsers([...allUsers, res.data.newUser]));
     toast.success("New Admin Created Successfully")
      // Reset input fields
      setAllUsers({
       email:"",
       password:""
      });

      // Go to clients tab
      setShowModal(false)
     // toast.success('Client added successfully');
    }
  } catch (error) {
    console.error(error);
    toast.error(error.response?.data?.message || 'Failed To Add Admin');
  } finally {
    dispatch(setLoading(false));
  }
  };





  // Navigate to editor for new blog
  const navigateToEditor = useCallback(() => {
    setIsEditMode(false);
    setEditingBlogId(null);
    setBlogForm({
      title: '',
      content: '',
      imageUrl: '',
    });
    setSelectedImage(null);
    setImagePreview(null);
    setUploadedImageUrl(null);
    setCurrentView('editor');
  }, []);

  // Navigate to editor for editing existing blog
  const navigateToEditBlog = useCallback((blog) => {
    setIsEditMode(true);
    setEditingBlogId(blog._id);
    setBlogForm({
      title: blog.title,
      content: blog.content,
      imageUrl: blog.imageUrl,
    });
    setSelectedImage(null);
    setImagePreview(null);
    setUploadedImageUrl(null);
    setCurrentView('editor');
  }, []);

  // Handle form submission for both create and edit
  const handleSubmitBlog = useCallback(async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoadin(true));
     
      const blogData = {
        ...blogForm,
        imageUrl: uploadImageUrl || blogForm.imageUrl
      };

      let res;
      if (isEditMode) {
        // Edit existing blog
        res = await axios.put(`${import.meta.env.VITE_API_URL}/api/blog/update/${editingBlogId}`, blogData, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        });
        
        if (res.data.success) {
          // Update the blog in the list
          const updatedBlogs = allBlogs.map(blog => 
            blog._id === editingBlogId ? res.data.updatedBlog : blog
          );
          dispatch(setAllBlogs(updatedBlogs));
          toast.success("Blog Edited Successfully");
        }
      } else {
        // Create new blog
        res = await axios.post(`${import.meta.env.VITE_API_URL}/api/blog/add`, blogData, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setAllBlogs([...allBlogs, res.data.newBlog]));
          toast.success("Blog Added Successfully");
        }
      }

      if (res.data.success) {
        setBlogForm({
          title: "",
          imageUrl: "",
          content: ""
        });
        setSelectedImage(null);
        setImagePreview(null);
        setUploadedImageUrl(null);
        setIsEditMode(false);
        setEditingBlogId(null);
        setCurrentView('blogs');
      }
    } catch (error) {
      console.error(error);
     toast.error( error.response?.data?.message || 'Failed To Add Blog');
    } finally {
      dispatch(setLoadin(false));
     
    }
  }, [blogForm, uploadImageUrl, dispatch, allBlogs, isEditMode, editingBlogId]);

  const fetchAllBlogs = useCallback(async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/get`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setAllBlogs(res.data.blogs));
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchAllBlogs();
  }, [fetchAllBlogs]);

  // Show delete confirmation modal
  const showDeleteConfirmation = useCallback((blog) => {
    setBlogToDelete(blog);
    setShowDeleteModal(true);
  }, []);

  // Hide delete confirmation modal
  const hideDeleteConfirmation = useCallback(() => {
    setShowDeleteModal(false);
    setBlogToDelete(null);
  }, []);

  // Confirm delete blog
  const confirmDeleteBlog = useCallback(async () => {
    if (!blogToDelete) return;
    
    dispatch(setLoadin(true));
    try {
      const res = await axios.delete(`${import.meta.env.VITE_API_URL}/api/blog/delete/${blogToDelete._id}`, {
        withCredentials: true,
      });
      if (res.data.success) {
        const updatedBlogs = allBlogs.filter(blog => blog._id !== blogToDelete._id);
        dispatch(setAllBlogs(updatedBlogs));
        toast.success("Blog Deleted Successfully");
        hideDeleteConfirmation();
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.response?.data?.message || 'Failed To Delete Blog');
    } finally {
      dispatch(setLoadin(false));
    }
  }, [blogToDelete, allBlogs, dispatch, hideDeleteConfirmation]);

  const handleLogout = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/user/logout`, {}, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        toast.success("Logout Successfully");
        navigate("/");
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error(error.response?.data?.message || 'Failed To Logout');
    }
  };
// const handleLogout = async () => {
//   try {
//     const res = await api.post('/api/user/logout');

//     if (res.data.success) {
//       dispatch(setUser(null));
//       toast.success("Logout Successfully");
//       navigate("/");
//     }
//   } catch (error) {
//     console.error(error.response?.data || error.message);
//     toast.error(error.response?.data?.message || 'Failed To Logout');
//   }
// };
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBlogs = useMemo(() => {
    return allBlogs.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
  }, [allBlogs, searchTerm]);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleImageRemove = useCallback(() => {
    setSelectedImage(null);
    setImagePreview(null);
    setUploadedImageUrl(null);
    if (!isEditMode) {
      setBlogForm(prev => ({ ...prev, imageUrl: '' }));
    }
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = '';
  }, [isEditMode]);

  // Delete Confirmation Modal Component
  const DeleteConfirmationModal = useMemo(() => {
    if (!showDeleteModal) return null;

    return (
     
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
  <div className="bg-white rounded-xl p-6 md:p-8 max-w-md w-full mx-4 shadow-2xl relative">
    {/* Close button with rounded-full */}
    <button
      onClick={hideDeleteConfirmation}
      className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-100 transition-colors"
    >
      <X className="w-5 h-5" />
    </button>

    <div className="pr-8"> {/* Add padding to prevent text overlap with close button */}
      <h3 className="text-xl font-semibold text-slate-800 mb-6">Confirm Delete</h3>
      
      <p className="text-slate-600 mb-8 leading-relaxed">
        Are you sure you want to delete the blog <span className='font-medium text-red-600'>"{blogToDelete?.title}"</span>? This action cannot be undone.
      </p>
    </div>
    
    <div className="flex justify-end space-x-3">
      <button
        onClick={hideDeleteConfirmation}
        className="px-6 py-2 text-slate-600 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
      >
        Cancel
      </button>
      <button
        onClick={confirmDeleteBlog}
        className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-lg"
      >
        Delete
      </button>
    </div>
  </div>
</div>
    );
  }, [showDeleteModal, blogToDelete, hideDeleteConfirmation, confirmDeleteBlog]);

const handleNavigation = (view) => {
  setCurrentView(view);
  setIsSidebarOpen(false);
};
const Sidebar = useMemo(() => (
  <div className={`w-64 bg-slate-800 shadow-lg h-screen fixed left-0 top-0 z-50 lg:z-auto transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
      <button 
      className="lg:hidden absolute top-1 right-1 p-1  rounded-full border border-slate-600 hover:border-slate-400 hover:bg-slate-700 transition-colors  text-slate-300 hover:text-white"
      onClick={() => setIsSidebarOpen(false)}
    >
      <X className="w-5 h-5" />
    </button>
    <div className="p-6 border-b border-slate-700">
      <h1 className="text-xl font-bold text-emerald-400">Adiyogi Foundation</h1>
      <p className="text-sm text-slate-400 mt-1">CMS Admin Panel</p>
    </div>
    
    <nav className="mt-6">
      <div className="px-4 space-y-2">
        <button
          onClick={() => {
    setCurrentView('dashboard');
    if (window.innerWidth < 1024) setIsSidebarOpen(false);
  }}
          className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
            currentView === 'dashboard' ? 'bg-emerald-500 text-white shadow-lg' : 'text-slate-300 hover:bg-slate-700 hover:text-emerald-400'
          }`}
        >
          <User className="w-5 h-5 mr-3" />
          Dashboard
        </button>
        
        <button
        onClick={() => {
    setCurrentView('blogs');
    if (window.innerWidth < 1024) setIsSidebarOpen(false);
  }}
          className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
            currentView === 'blogs' ? 'bg-emerald-500 text-white shadow-lg' : 'text-slate-300 hover:bg-slate-700 hover:text-emerald-400'
          }`}
        >
          <Edit className="w-5 h-5 mr-3" />
          Manage Blogs
        </button>

        <button
          onClick={() => {
    setCurrentView('admins');
    if (window.innerWidth < 1024) setIsSidebarOpen(false);
  }}
          className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
            currentView === 'admins' || currentView === 'adminEditor' ? 'bg-emerald-500 text-white shadow-lg' : 'text-slate-300 hover:bg-slate-700 hover:text-emerald-400'
          }`}
        >
          <User className="w-5 h-5 mr-3" />
          Manage Admins
        </button>
      </div>
    </nav>
    
    <div className="absolute bottom-6 left-4 right-4">
      <button onClick={handleLogout} className="w-full flex items-center px-4 py-3 text-slate-300 hover:bg-slate-700 hover:text-red-400 rounded-lg transition-colors">
        <LogOut className="w-5 h-5 mr-3" />
        Logout
      </button>
    </div>
  </div>
), [currentView,isSidebarOpen]);

const Dashboard = useMemo(() => (
  <div className="space-y-6">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <h2 className="text-2xl font-bold text-slate-800">Admin Dashboard</h2>
      <button
        onClick={navigateToEditor}
        className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors flex items-center gap-2 shadow-lg w-full sm:w-auto"
      >
        <Plus className="w-4 h-4" />
        New Blog Post
      </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 md:p-6 rounded-xl shadow-lg border border-emerald-200">
        <h3 className="text-lg font-semibold text-slate-700">Total Blogs</h3>
        <p className="text-3xl font-bold text-emerald-600 mt-2">{allBlogs.length}</p>
      </div>
      
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 md:p-6 rounded-xl shadow-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-slate-700">Total Admin</h3>
        <p className="text-3xl font-bold text-blue-600 mt-2">{allUsers.length}</p>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-6 rounded-xl shadow-lg border border-slate-200">
        <ResponsiveContainer width="100%" height={80}>
          <PieChart width={200} height={200}>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={25}
              outerRadius={35}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [`${value}`, `${name}`]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
      <div className="bg-white rounded-xl shadow-lg border border-slate-200">
        <div className="p-4 md:p-6 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800">Blog Activity</h3>
        </div>
        <div className="p-4 md:p-6">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#f8fafc', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }} 
              />
              <Bar dataKey="blogs" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-slate-200">
        <div className="p-4 md:p-6 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800">Recent Blog Posts</h3>
        </div>
        <div className="divide-y divide-slate-200 max-h-64 overflow-y-auto bg-gray-100">
          {allBlogs.slice(0, 5).map((blog) => (
            <div key={blog.id || blog._id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-slate-800 truncate">{blog.title}</h4>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigateToEditBlog(blog)}
                  className="p-2 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => showDeleteConfirmation(blog)}
                  className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
), [allBlogs, allUsers.length, navigateToEditor, navigateToEditBlog, showDeleteConfirmation]);

// const BlogList = useMemo(() => (
//   <div className="space-y-6">
//     <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//       <h2 className="text-2xl font-bold text-slate-800">Manage Blogs ({allBlogs.length})</h2>
//       <button
//         onClick={navigateToEditor}
//         className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors flex items-center gap-2 shadow-lg w-full sm:w-auto"
//       >
//         <Plus className="w-4 h-4" />
//         New Blog Post
//       </button>
//     </div>

//     <div className="bg-white rounded-xl shadow-lg border border-slate-200">
//       <div className="p-4 md:p-6 border-b border-slate-200">
//         <div className="flex items-center gap-4">
//           <div className="flex-1 relative">
//             <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
//             <input
//               type="text"
//               placeholder="Search blogs..."
//               value={searchTerm}
//               onChange={handleSearchChange}
//               className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 transition-all"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="divide-y divide-slate-200">
//         {filteredBlogs.map((blog) => (
//           <div key={blog.id || blog._id} className="p-4 md:p-6 hover:bg-slate-50 transition-colors">
//             <div className="flex flex-col sm:flex-row items-start gap-4">
//               <div className="relative w-full sm:w-24 flex-shrink-0">
//                 <img
//                   src={blog.imageUrl}
//                   alt={blog.title}
//                   className="w-full sm:w-24 h-24 object-cover rounded-xl shadow-md border border-slate-200"
//                 />
//                 <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
//                   <span className="text-white text-xs font-bold">✓</span>
//                 </div>
//               </div>
//               <div className="flex-1 min-w-0">
//                 <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
//                   <div className="flex-1 min-w-0">
//                     <h3 className="font-semibold text-slate-800 text-lg mb-2 truncate">{blog.title}</h3>
//                     <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-3">
//                       {blog.content.substring(0, 120)}...
//                     </p>
//                     <div className="flex items-center gap-4 text-sm text-slate-500">
//                       <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
//                         Published
//                       </span>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2 flex-shrink-0">
//                     <button
//                       onClick={() => navigateToEditBlog(blog)}
//                       className="p-2 sm:p-3 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors border border-transparent hover:border-emerald-200"
//                       title="Edit Blog"
//                     >
//                       <Edit className="w-5 h-5" />
//                     </button>
//                     <button
//                       onClick={() => showDeleteConfirmation(blog)}
//                       className="p-2 sm:p-3 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-200"
//                       title="Delete Blog"
//                     >
//                       <Trash2 className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// ), [filteredBlogs, navigateToEditor, handleSearchChange, searchTerm, navigateToEditBlog, showDeleteConfirmation]);



const BlogList = useMemo(() => (
  <div className="space-y-6 px-2 sm:px-4">
    {/* Header Section */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
        Manage Blogs ({allBlogs.length})
      </h2>
      <button
        onClick={navigateToEditor}
        className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors flex items-center gap-2 shadow-lg w-full sm:w-auto min-h-[44px]"
      >
        <Plus className="w-4 h-4" />
        New Blog Post
      </button>
    </div>

    {/* Search Bar */}
    <div className="bg-white rounded-xl shadow-lg border border-slate-200">
      <div className="p-4 md:p-6 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative w-full">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 transition-all text-sm sm:text-base"
            />
          </div>
        </div>
      </div>

      {/* Blog List */}
      <div className="divide-y divide-slate-200">
        {filteredBlogs.map((blog) => (
          <div key={blog.id || blog._id} className="p-4 md:p-6 hover:bg-slate-50 transition-colors">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              {/* Blog Image */}
              <div className="relative w-full sm:w-24 flex-shrink-0">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full sm:w-24 h-40 sm:h-24 object-cover rounded-xl shadow-md border border-slate-200"
                />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="flex-1 min-w-0 w-full">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-800 text-base sm:text-lg mb-1 sm:mb-2 truncate">
                      {blog.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-2 break-words">
                      {blog.content.substring(0, 120)}...
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                        Published
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => navigateToEditBlog(blog)}
                      className="p-2 sm:p-3 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors border border-transparent hover:border-emerald-200"
                      title="Edit Blog"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => showDeleteConfirmation(blog)}
                      className="p-2 sm:p-3 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-200"
                      title="Delete Blog"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
), [filteredBlogs, navigateToEditor, handleSearchChange, searchTerm, navigateToEditBlog, showDeleteConfirmation]);




const BlogEditor = useMemo(() => (
  <form className="space-y-6" onSubmit={handleSubmitBlog}>
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <h2 className="text-2xl font-bold text-slate-800">
        {isEditMode ? 'Edit Blog Post' : 'Create New Blog Post'}
      </h2>
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <button
          type="button"
          onClick={() => setCurrentView('blogs')}
          className="px-6 py-2 text-slate-600 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors w-full sm:w-auto"
        >
          Cancel
        </button>
         <button
  type="submit"
  disabled={loadin}
  className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors shadow-lg w-full sm:w-auto flex items-center justify-center gap-2"
>
  {loadin ? (
    <>
      {/* Manual Spinner */}
      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      {isEditMode ? "Updating..." : "Saving..."}
    </>
  ) : (
    isEditMode ? "Update Blog" : "Save Blog"
  )}
</button>

      </div>
    </div>

    <div className="bg-white rounded-xl shadow-lg border border-slate-200">
      <div className="p-4 md:p-8 space-y-6 md:space-y-8">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            Blog Title *
          </label>
          <input
            type="text"
            name='title'
            required
            value={blogForm.title}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 transition-all text-slate-800 placeholder-slate-400"
            placeholder="Enter an engaging blog title..."
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            Featured Image
          </label>
          <div className="space-y-4">
            <div className="relative">
              <input
                type="file"
                required={!isEditMode && !blogForm.imageUrl}
                onChange={inputFileChange}
                className="block w-full cursor-pointer text-sm text-slate-600 file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 file:transition-colors border border-slate-300 rounded-lg bg-slate-50"
              />
            </div>
            {(imagePreview || blogForm.imageUrl) && (
              <div className="relative inline-block">
                <div className="relative">
                  <img
                    src={imagePreview || blogForm.imageUrl}
                    alt="Preview"
                    className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-xl border-2 border-slate-200 shadow-lg"
                  />
                  <button
                    type="button"
                    onClick={handleImageRemove}
                    className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow-lg transition-colors border-2 border-white"
                  >
                    ×
                  </button>
                </div>
                <div className="mt-2 text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                    Featured Image
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            Blog Content *
          </label>
          <div className="relative">
            <textarea
              value={blogForm.content}
              required
              name='content'
              onChange={handleChange}
              rows="14"
              className="w-full px-4 py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 transition-all text-slate-800 placeholder-slate-400 resize-none"
              placeholder="Share your thoughts and ideas here. Write engaging content that resonates with your readers..."
            />
            <div className="absolute bottom-3 right-3 text-xs text-slate-400">
              {blogForm.content.length} characters
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
), [handleSubmitBlog, blogForm, handleChange, inputFileChange, imagePreview, handleImageRemove, isEditMode]);

const AdminManagement = useMemo(() => (
  <div className="space-y-6">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <h2 className="text-2xl font-bold text-slate-800">Manage Admins ({allUsers.length})</h2>
      <button
        onClick={() => setShowModal(true)}
        className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors flex items-center gap-2 shadow-lg w-full sm:w-auto"
      >
        <Plus className="w-4 h-4" />
        Add Admin
      </button>
    </div>

    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="p-4 md:p-6 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search admins..."
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 transition-all"
            />
          </div>
        </div>
      </div>

      <div className="divide-y divide-slate-200 overflow-x-auto scrollbar-gray">
        <div className="grid grid-cols-12 bg-slate-50 p-4 font-semibold text-slate-700 min-w-[800px]">
          <div className="col-span-4">Email</div>
          <div className="col-span-3">Role</div>
          <div className="col-span-3">Created At</div>
          <div className="col-span-2">Actions</div>
        </div>

        {allUsers.map((user) => (
          <div key={user._id} className="grid grid-cols-12 p-4 items-center hover:bg-slate-50 transition-colors min-w-[800px]">
            <div className="col-span-4 font-medium text-slate-800 truncate">{user.email}</div>
            <div className="col-span-3">
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                user.role === 'superadmin' 
                  ? 'bg-purple-100 text-purple-800 border border-purple-200' 
                  : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
              }`}>
                {user.role}
              </span>
            </div>
            <div className="col-span-3 text-sm text-slate-600">
              {new Date(user.createdAt).toLocaleDateString()}
            </div>
            {/* <div className="col-span-2">
              {user.role !== 'super-admin' && (
                <button
                  onClick={() => showDeleteAdminConfirmation(user._id)}
                  className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-200"
                  title="Delete Admin"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div> */}
            <div className="col-span-2">
  {user.role !== 'super-admin' ? (
    <button
      onClick={() => showDeleteAdminConfirmation(user._id)}
      className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-200"
      title="Delete Admin"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  ) : (
    <div
      className="p-2 text-gray-400 cursor-not-allowed rounded-lg border border-gray-200 relative group"
      title="Super Admin cannot be deleted"
    >
      <Trash2 className="w-4 h-4 opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-red-400 text-xl font-bold">×</span>
      </div>
    </div>
  )}
</div>

          </div>
        ))}
      </div>
    </div>

    {/* Add Admin Modal */}
    {showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl p-6 md:p-8 w-full max-w-md mx-4 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-slate-800">Add New Admin</h3>
            <button
              onClick={() => setShowModal(false)}
              className="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleAddAdmin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 transition-all"
                placeholder="admin@example.com"
              />
            </div>

            {/* <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password *
              </label>
              <input
                type="password"
                required
                minLength="6"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 transition-all"
                placeholder="••••••••"
              />
            </div> */}
{/* <div className="relative">
  <label className="block text-sm font-semibold text-slate-700 mb-2">
    Password *
  </label>
  <input
    type={showPassword ? "text" : "password"}
    required
    // minLength="6"
    value={formData.password}
    onChange={(e) => setFormData({...formData, password: e.target.value})}
    className="w-full px-4 py-3 pr-12 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 transition-all"
    placeholder="••••••••"
  />
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-slate-500 hover:text-slate-700 focus:outline-none"
    tabIndex={-1}
  >
    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
  </button>
</div> */}
<div className="relative">
  <label className="block text-sm font-semibold text-slate-700 mb-2">
    Password *
  </label>
  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      required
      value={formData.password}
      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      className="w-full px-4 py-3 pr-12 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 transition-all"
      placeholder="••••••••"
    />
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute inset-y-0 right-3 flex items-center text-slate-500 hover:text-slate-700"
      tabIndex={-1}
    >
      {showPassword ? (
        <EyeOff className="w-5 h-5" />
      ) : (
        <Eye className="w-5 h-5" />
      )}
    </button>
  </div>
</div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-6 py-2 text-slate-600 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50 shadow-lg"
              >
                {isLoading ? 'Adding...' : 'Add Admin'}
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
    
    {showAdminDeleteModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl p-6 md:p-8 w-full max-w-md mx-4 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-slate-800">Confirm Admin Deletion</h3>
            <button
              onClick={() => setShowAdminDeleteModal(false)}
              className="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-slate-600 mb-8 leading-relaxed">
            Are you sure you want to delete this admin? This action cannot be undone.
          </p>
          
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setShowAdminDeleteModal(false)}
              className="px-6 py-2 text-slate-600 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={removeAdmin}
              disabled={isLoading}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 shadow-lg"
            >
              {isLoading ? 'Deleting...' : 'Delete Admin'}
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
),[allUsers, showModal, formData, isLoading, handleAddAdmin, showAdminDeleteModal, adminToDelete]);

return (
  // <div className="bg-gray-50 min-h-screen">
  //   {Sidebar}
    
  //   {/* Mobile menu button */}
  //   <button 
  //     className="fixed top-4 left-4 z-40 lg:hidden p-2 rounded-md bg-slate-800 text-white shadow-lg"
  //     onClick={() => document.querySelector('.fixed.left-0').classList.toggle('translate-x-0')}
  //   >
  //     <Menu className="w-6 h-6" />
  //   </button>
    
  //   <div className="lg:ml-64 p-4 md:p-8 pt-20 lg:pt-8">
  //     {currentView === 'dashboard' && Dashboard}
  //     {currentView === 'blogs' && BlogList}
  //     {currentView === 'editor' && BlogEditor}
  //     {currentView === 'admins' && AdminManagement}
  //   </div>
    
  //   {DeleteConfirmationModal}
  // </div>
    <div className="bg-gray-50 min-h-screen relative">
    {Sidebar}
    
    {/* Mobile menu button */}
    <button 
      className="fixed top-4 left-4 z-40 lg:hidden p-2 rounded-md bg-slate-800 text-white shadow-lg"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      {isSidebarOpen ? (
        <X className="w-6 h-6" /> // Close icon when open
      ) : (
        <Menu className="w-6 h-6" /> // Menu icon when closed
      )}
    </button>
    
    {/* Clickable overlay for mobile */}
    {isSidebarOpen && (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={() => setIsSidebarOpen(false)}
      />
    )}
    
    <div className="lg:ml-64 p-4 md:p-8 pt-20 lg:pt-8">
      {currentView === 'dashboard' && Dashboard}
      {currentView === 'blogs' && BlogList}
      {currentView === 'editor' && BlogEditor}
      {currentView === 'admins' && AdminManagement}
    </div>
    
    {DeleteConfirmationModal}
  </div>

);
};

export default AdminDashboard;