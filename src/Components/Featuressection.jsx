import React from 'react';
import deliveryIcon from '../assets/delivery.png';
import supportIcon from '../assets/support.png';
import guaranteeIcon from '../assets/gurantee.png';

const FeaturesSection = () => {
  const features = [
    {
      icon: deliveryIcon,
      title: 'FREE AND FAST DELIVERY',
      subtitle: 'Free delivery for all orders over $140',
    },
    {
      icon: supportIcon,
      title: '24/7 CUSTOMER SERVICE',
      subtitle: 'Friendly 24/7 customer support',
    },
    {
      icon: guaranteeIcon,
      title: 'MONEY BACK GUARANTEE',
      subtitle: 'We return money within 30 days',
    },
  ];

  return (
    <div className="py-10 px-4 lg:px-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <img src={feature.icon} alt={feature.title} className="w-14 h-14" />
              </div>
            </div>
            <h3 className="text-sm font-bold uppercase">{feature.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{feature.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
