import React, { useState } from 'react';
import ResourcesHeader from './ResourceHeader';
import ResourcesCards from './ResourceCards';

const ResourcesSection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('education');

    return (
        <section className="h-full w-full py-12 bg-black relative">
            <div className="absolute p-8 w-[1000px] h-[500px] bg-[radial-gradient(circle_at_bottom_right,_#8b5cf6_0%,_transparent_70%)] rounded-full blur-[150px] opacity-50 z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative h-full z-10">
                <ResourcesHeader 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory} 
                />
                <ResourcesCards activeCategory={activeCategory} />
            </div>
        </section>
    );
};

export default ResourcesSection;