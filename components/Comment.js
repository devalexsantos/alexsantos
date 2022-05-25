import { DiscussionEmbed } from "disqus-react";

const Comments = (props) => {
  console.log(props.post);
  const shortname = "devalexsantos-com-br";

  const config = {
    url: `https://devalexsantos.com.br/${props.post.slug}`,
    identifier: props.post.slug,
    title: props.post.tittle,
  };

  return (
    <div className="container mx-auto">
      <DiscussionEmbed shortname={shortname} config={config} />
    </div>
  );
};

export default Comments;
