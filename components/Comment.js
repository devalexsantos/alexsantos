import { DiscussionEmbed } from "disqus-react";

const Comments = (props) => {
  const shortname = "devalexsantos-com-br";

  const config = {
    url: `https://devalexsantos.com.br/${props.post.slug}`,
    identifier: props.post.slug,
    title: props.post.tittle,
  };

  return (
    <div className="container mx-auto p-4">
      <DiscussionEmbed shortname={shortname} config={config} />
    </div>
  );
};

export default Comments;
