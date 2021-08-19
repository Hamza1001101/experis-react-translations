const SignImage = ({ src }) => {
  return <img src={"/sign-images/" + src} alt={src} height="40" />;
};

export default SignImage;
