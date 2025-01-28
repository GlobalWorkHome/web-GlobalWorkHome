import React, { useState } from 'react';
import ApplicationsDashboard from '../components/ApplicationsDashboard';
import ApplicationDetail from '../components/ApplicationDetail';

const ApplicationsView = () => {
  const [selectedApplicationId, setSelectedApplicationId] = useState(null);

  const handleViewDetails = (id) => {
    setSelectedApplicationId(id);
  };

  const handleBackToDashboard = () => {
    setSelectedApplicationId(null);
  };

  return (
    <main className="flex-1">
      {selectedApplicationId ? (
        <ApplicationDetail 
          params={{ id: selectedApplicationId }} 
          onBack={handleBackToDashboard} 
        />
      ) : (
        <ApplicationsDashboard onViewDetails={handleViewDetails} />
      )}
    </main>
  );
};

export default ApplicationsView;

