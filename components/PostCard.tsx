type Props = {
  image: string;
  title: string;
  content: string;
};

export default function PostCard({ image, title, content }: Props) {
  return (
    <div className="w-full md:w-6/12 lg:w-full mx-auto my-5 p-5 bg-white">
      <img src={image} className="mx-auto" />
      <h3 className="text-xl font-bold mt-5 mb-3">{title}</h3>
      <p>{content}</p>
    </div>
  );
}
