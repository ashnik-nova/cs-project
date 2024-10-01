import React from 'react';
import iot from 'B:/Coding Stuffs/React/cs-project/secure-iot/src/assets/iot.jpeg'; // Assuming the image is in the same directory as your component

function Home() {
  return (
    <div className="bg-slate-300 p-2 h-96 flex pt-8">
        <img src={iot} alt=""
        className='rounded-xl mt-5 w-1/3 h-4/5'
        />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In repellat, neque at accusamus dolorum, modi eius id libero possimus iure sint doloremque cumque ipsum ducimus totam. Dignissimos laudantium obcaecati numquam.
          </p>
          <button>
            Get Started
            
          </button>
        </div>
    </div>
  );
}

export default Home;