/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react';
import ResourceCard from './ResourceCard';
import { resourcesData, ResourceCard as ResourceCardType } from '../data/resourceData';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface ResourcesCardsProps {
    activeCategory: string;
}

const ResourcesCards: React.FC<ResourcesCardsProps> = ({ activeCategory }) => {
    const containerRef = useRef<HTMLDivElement>(null!);
    useIntersectionObserver({
        ref: containerRef,
        threshold: 0.1,
    });

    const filteredResources = activeCategory === 'all' 
        ? resourcesData 
        : resourcesData.filter(card => card.category === activeCategory);

    return (
        <div ref={containerRef} className="mt-8 relative">      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredResources.map((card, index) => (
            <ResourceCard key={card.id} card={card} index={index} activeCategory={''} />
            ))}
        </div>
        </div>
    );
};

export default ResourcesCards;