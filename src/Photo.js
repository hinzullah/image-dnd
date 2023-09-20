import React from 'react'
import { useSortable } from '@dnd-kit/sortable'

const Photo = ({src, tag, id}) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  return (
    <div className="gallery-image" ref={setNodeRef} style={{ transform, transition }} {...attributes} {...listeners}>
      <img src={src} alt={tag} />
      <div className="image-caption">{tag}</div>
    </div>
  )
}

export default Photo