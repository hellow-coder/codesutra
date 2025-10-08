import { useLoader } from "../../../Context/LoaderContext";

const LoaderComponent = () => {
  const { showLoader, hideLoader } = useLoader();

  const handleClick = async () => {
    console.log("clicked ")
    showLoader();

    // 6 seconds tak loader dikhane ke liye
    setTimeout(() => {
      hideLoader();
    }, 6000);
  };

  return (
    <button onClick={handleClick}>
      Run Task
    </button>
  );
};

export default LoaderComponent;
