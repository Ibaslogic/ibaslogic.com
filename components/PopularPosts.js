import FeaturedPost from "./Featured";

const PopularPosts = ({ containerStyle, homeStyle }) => {
  return (
    <>
      <FeaturedPost
        title="React Tutorial From Scratch: A Step-by-Step Guide (2021)"
        description="In this React tutorial for beginners, you will learn every step by step to build a React project. Besides, you will be able to deploy on the web."
        slug="react-tutorial-for-beginners"
        featured="/images/react-tutorial-for-beginners/react-tutorial-for-beginners.png"
        containerStyle={containerStyle}
        homeStyle={homeStyle}
      />
      <FeaturedPost
        title="Working with React Form and Handling Event"
        description="Form handling in React works a bit different compared to the regular HTML form. In this step-by-step guide, you will learn this in a simple way."
        slug="react-form-handling"
        featured="/images/react-form-handling/react-form-handling.png"
        containerStyle={containerStyle}
        homeStyle={homeStyle}
      />
      <FeaturedPost
        title="How to implement Hamburger Menu in React"
        description="In this part of the series, you’ll learn how to implement the functionality that allows you to toggle sidebar navigation."
        slug="how-to-add-hamburger-menu-in-react"
        featured="/images/how-to-add-hamburger-menu-in-react/how-to-add-hamburger-menu-in-react.png"
        containerStyle={containerStyle}
        homeStyle={homeStyle}
      />
      <FeaturedPost
        title="How to implement Hamburger Menu in React"
        description="In this part of the series, you’ll learn how to implement the functionality that allows you to toggle sidebar navigation."
        slug="how-to-add-hamburger-menu-in-react"
        featured="/images/how-to-add-hamburger-menu-in-react/how-to-add-hamburger-menu-in-react.png"
        containerStyle={containerStyle}
        homeStyle={homeStyle}
      />
      <FeaturedPost
        title="How to implement Hamburger Menu in React"
        description="In this part of the series, you’ll learn how to implement the functionality that allows you to toggle sidebar navigation."
        slug="how-to-add-hamburger-menu-in-react"
        featured="/images/how-to-add-hamburger-menu-in-react/how-to-add-hamburger-menu-in-react.png"
        containerStyle={containerStyle}
        homeStyle={homeStyle}
      />
      <FeaturedPost
        title="How to implement Hamburger Menu in React"
        description="In this part of the series, you’ll learn how to implement the functionality that allows you to toggle sidebar navigation."
        slug="how-to-add-hamburger-menu-in-react"
        featured="/images/how-to-add-hamburger-menu-in-react/how-to-add-hamburger-menu-in-react.png"
        containerStyle={containerStyle}
        homeStyle={homeStyle}
      />
    </>
  );
};

export default PopularPosts;
