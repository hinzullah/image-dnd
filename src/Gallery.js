import React from 'react';
import { DndContext } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import Photo from './Photo';



const Gallery = ({ photos }) => {



  return (
    <DndContext>
      <SortableContext>
        <div className="gallery">
          {photos.map((photo, index) => (
            <Photo key={index} id={index} src={photo.src} alt={photo.alt} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default Gallery;
