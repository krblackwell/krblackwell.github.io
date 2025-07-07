import React, { useState } from 'react';


const SillyStoryJS: React.FC = () => {
  const [typeOfPerson, setTypeOfPerson] = useState('');
  const [toVerb1, setVerb1] = useState('');
  const [toVerb2, setVerb2] = useState('');
  const [adjective, setAdjective] = useState('');
  const [story, setStory] = useState('');

  const handleSubmit = () => {
    setStory(`Once upon a time, a bright, ${adjective} ${typeOfPerson}, who is learning how to code, decided ${toVerb1} the internet so they could learn how ${toVerb2}.`);
  };

  return (
    <div>
      <h2>Silly Stories Example</h2>
      <div>
        <label>
          Type of Person:
          <input type="text" value={typeOfPerson} onChange={(e) => setTypeOfPerson(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          A "to" Verb:
          <input type="text" value={toVerb1} onChange={(e) => setVerb1(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          A "to" Verb:
          <input type="text" value={toVerb2} onChange={(e) => setVerb2(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Adjective:
          <input type="text" value={adjective} onChange={(e) => setAdjective(e.target.value)} />
        </label>
      </div>
      <button onClick={handleSubmit}>Create Story</button>
      {story && (
          <div>
            <p><strong>Your Silly Story :</strong></p>
            <p>{story}</p>
          </div>
        )}
    </div>
  );
};

export default SillyStoryJS;

