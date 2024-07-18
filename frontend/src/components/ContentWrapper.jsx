


const ContentWrapper = (props) => {
	console.log(props.children)
	return <div className="max-w-[1073px] m-auto">{props.children}</div>;
};

export default ContentWrapper;
