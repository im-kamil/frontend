import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        The moment you think you’ve reached your limit is the moment you discover how much further you can go. Every time you lift, run, or stretch beyond what feels comfortable, 
        you’re teaching your body and mind to adapt, grow, and thrive. 
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Bootcamp isn’t just a workout; it’s a mindset. 
        Push beyond your limits, conquer new challenges, and walk away feeling unstoppable
        </p>
        <div className="bootcamps">
          <div>
            <h4>Transform Your Body, Challenge Your Limits!</h4>
            <p>
            This headline emphasizes the bootcamp’s focus on physical transformation and pushing personal boundaries. It appeals to those looking for significant fitness progress and the motivation to exceed their perceived limits.
            This bootcamp is for those who are ready to commit and go beyond their comfort zone.
            </p>
          </div>
          <div>
            <h4>Unleash Your Inner Warrior!</h4>
            <p>
            This tagline is bold and empowering, encouraging participants to tap into their inner strength and determination. 
            It conveys the idea that the bootcamp is not just about physical fitness but also about mental toughness and resilience.
            </p>
          </div>
          <div>
            <h4>Sweat. Strength. Success.</h4>
            <p>
            Short and rhythmic, this headline succinctly conveys the essence of the bootcamp: intense effort (sweat), building physical and mental strength, and achieving personal success. 
            It’s ideal for drawing attention quickly and appealing to goal-oriented individuals.
            </p>
          </div>
          <div>
            <h4>Your Fitness Journey Starts Here.</h4>
            <p>
            This headline is inviting and inclusive, targeting people of all fitness levels. It reassures newcomers and encourages them to begin their transformation in a supportive and motivating environment. 
            It’s a gentle call to action for anyone who wants to start or restart their fitness path.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
