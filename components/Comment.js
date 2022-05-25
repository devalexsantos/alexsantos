import { DiscussionEmbed } from "disqus-react";

const Comments = (props) => {
  console.log(props.post);
  const disqusShortname = "devalexsantos-com-br";

  const disqusConfig = {
    url: `https://devalexsantos.com.br/${props.post.slug}`,
    identifier: props.post.slug,
    title: props.post.tittle,
  };

  return (
    <div className="container mx-auto">
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default Comments;
