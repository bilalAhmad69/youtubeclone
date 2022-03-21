const Iframe = (props) => {
  return (
    <iframe
      width="286"
      height="160"
      src={props.path}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
      allowFullScreen
      autoPlay="1"
      showinfo="0"
      controls="0"
      autohide="1"
      scrolling="no"
      style={{ border: "1px solid black" }}
    ></iframe>
  );
};
export default Iframe;
