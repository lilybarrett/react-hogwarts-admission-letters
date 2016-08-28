import React from 'react';

const Letter = props => {
  let stateBoolean = props.accepted;

  if (props.stateBoolean) {
    return (
      <div className="letter">
        <div className="row">
          <div className="small-12 small-centered columns">
            <img src="https:upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg/2000px-Hogwarts_coat_of_arms_colored_with_shading.svg.png" />
          </div>
        </div>
        <div className="row">
          <div className="small-12 small-centered columns">
            <h1>HOGWARTS SCHOOL OF WITCHRAFT AND WIZARDRY</h1>
          </div>
        </div>
        <div className="row">
          <div className="small-12 small-centered columns from">
            <p><strong>Headmaster: Albus Dumbledore</strong></p>
            <p>(Order of Merlin, First Class, Grand Sorc., Chf. Warlock, Supreme Mugwump,
  International Confed. of Wizards)</p>
          </div>
        </div>
        <div className="row">
          <div className="small-12 left columns">
            <p>Dear Adressee,</p>
            <p>We are pleased to inform you that you have a place at Hogwarts School of
    Witchcraft and Wizardry. Please find enclosed a list of all necessary books and
    equipment.</p>
            <p>Term begins on 1 September. We await your owl by no later than 31 July.</p>
            <p>Yours sincerely,</p>
            <p><strong>Minerva McGonagall</strong></p>
            <p><strong>Deputy Headmistress</strong></p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="letter">
        <div className="row">
          <div className="small-12 small-centered columns">
            <img src="https:upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg/2000px-Hogwarts_coat_of_arms_colored_with_shading.svg.png" />
          </div>
        </div>
        <div className="row">
          <div className="small-12 small-centered columns">
            <h1>HOGWARTS SCHOOL OF WITCHRAFT AND WIZARDRY</h1>
          </div>
        </div>
        <div className="row">
          <div className="small-12 small-centered columns from">
            <p><strong>Headmaster: Albus Dumbledore</strong></p>
            <p><strong>(Order of Merlin, First Class, Grand Sorc., Chf. Warlock, Supreme Mugwump,
  International Confed. of Wizards)</strong></p>
          </div>
        </div>
        <div className="row">
          <div className="small-12 left columns">
            <p>Dear Adressee,</p>
            <p>We regret to inform you that we are unable to offer you a place at Hogwarts
School of Witchcraft and Wizardry. After reviewing your application and Github profile, we recognize that you are indeed a "coding wizard". Unfortunately, we have concluded that you do not have actual magical
abilities, which you must have to be admitted into Hogwarts.</p>
            <p>Yours sincerely,</p>
            <p><strong>Minerva McGonagall</strong></p>
            <p><strong>Deputy Headmistress</strong></p>
          </div>
        </div>
      </div>
    )
  }
};

export default Letter;
