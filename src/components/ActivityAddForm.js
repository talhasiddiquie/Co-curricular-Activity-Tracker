import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import activitiesData from '../utils/activitiesData.json';
import { dateCalculate } from '../utils/globalFunction';

const ActivityAddForm = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const activityOptions = activitiesData[category] || [];
  const [formData, setFormData] = useState({
    activityName: '',
    scope: '',
    rank: '',
    engagement: '',
    fromDate: '',
    toDate: '',
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation', { state: { formData, category } });
  };

  const calculateMonth = dateCalculate(formData?.fromDate, formData?.toDate);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="md:w-6/12 w-full bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Add Activity</h1>
       


        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 bg-primary p-4">
           
            <div>
                <label className="text-white dark:text-gray-200"  >Activity Name</label>
                <select
                   name="activityName"
                   value={formData.activityName}
                   onChange={(e) => handleChange(e.target.name, e.target.value)}
                   required   
                   className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500  focus:outline-none focus:ring">
                   <option value="">Select an activity</option>
                 {activityOptions.map((activity) => (
                 <option key={activity.name} value={activity.name}>
                  {activity.name}
                </option>
              ))}
                </select>
            </div>

            <div>
                <label className="text-white dark:text-gray-200"  >Scope</label>
                <select
                   name="scope"
                   value={formData.scope}
                   onChange={(e) => handleChange(e.target.name, e.target.value)}
                   required
                   className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500   focus:outline-none focus:ring">
                   <option value="">Select a scope</option>
              {activityOptions[0]?.scopes.map((scope) => (
                <option key={scope} value={scope}>
                  {scope}
                </option>
              ))}
                </select>
            </div>
            <div>
                <label className="text-white dark:text-gray-200"  >Rank</label>
                <select
                  name="rank"
                  value={formData.rank}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500   focus:outline-none focus:ring">
               <option value="">Select a rank</option>
              {activityOptions[0]?.ranks.map((rank) => (
                <option key={rank} value={rank}>
                  {rank}
                </option>
              ))}
                </select>
            </div>
            <div>
                <label className="text-white dark:text-gray-200"  >Engagement</label>
                <select
                  name="engagement"
                  value={formData.engagement}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500   focus:outline-none focus:ring">
              <option value="">Select an engagement level</option>
              {activityOptions[0]?.engagements.map((engagement) => (
                <option key={engagement} value={engagement}>
                  {engagement}
                </option>
              ))}
                </select>
            </div>
           
            <div>
                <label className="text-white dark:text-gray-200"  >From Date</label>
                <input  value={formData.fromDate}
                name='fromDate'
                   onChange={(e) => handleChange(e.target.name, e.target.value)}
              required id="date" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500   focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-white dark:text-gray-200"  >To Date</label>
                <input  
                 name='toDate'
                                value={formData.toDate}
                                onChange={(e) => handleChange(e.target.name, e.target.value)}
                                required
              id="date" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500   focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-white dark:text-gray-200"  >Duration</label>
                <input  
                                value={calculateMonth > 1 ?  calculateMonth+' Months' : calculateMonth+' Month'  }
                                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                                required
                                disabled  type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500   focus:outline-none focus:ring"/>
            </div>
           
           
            
           
        </div>

        <div className="flex justify-end mt-6">
            <button  type="submit" className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-secondary">Save</button>
        </div>
        
    </form>
      </div>
    </div>
  );
};

export default ActivityAddForm;
