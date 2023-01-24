import React from 'react';

const CharacterList = ({ loading, thoughtsList, setThoughtsList, onNewHearthSubmit }) => {
  if (loading) {
    return <h1>Loading in progres...</h1>
  }
  const onToughtCheckChange = (thought) => {
    setThoughtsList(thoughtsList => thoughtsList.map(singleThought => {
      if (singleThought._id === thought._id) {
        return { ...singleThought, isChecked: !singleThought.isChecked };
      }
      return singleThought;
    }));
  }

  return (
    <section>
      {thoughtsList.map(thought => (
        <div className="container" key={thought._id}>
          <div className='textSpace'>
          <h4>{thought.message}</h4>
          </div>
            <p className="timestamp">
              {formatDistance(new Date(thought.createdAt), Date.now(), {
                addSuffix: true
              })}
            </p>
            <div className='like'>
            <button
                type="button"
                onClick={() => { onNewHearthSubmit(thought._id) }}
                onChange={onToughtCheckChange}
                style={{
                  background: thought.hearts >= 1 ? '#ffdede' : '#d5d4d5'
                }}>
                <span className="emoji" role="img" aria-label="heart-emoji">❤️</span>
              </button>
              <div className="heart-counter">
                <p>x{thought.hearts}</p>
              </div>
              </div>

        </div>
      ))}
    </section>
  );
};

export default CharacterList;