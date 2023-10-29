export default function Demo() {
  return (
    <section className="video-container w-full h-full">
      <iframe
        className="w-full h-full rounded-lg"
        src="https://www.youtube.com/embed/6wBapLca_eU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
}
