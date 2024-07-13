import parse from 'html-react-parser';

const Achievement = ({MyAchievement}) => {
	return (
		<div className="mt-7 px-10">
			<h1 className="w-full font-bold border-b-[1px] border-black pb-2">
				ACHIEVEMENT
			</h1>
			<p className="text-[12px] mt-3 break-words">
				{parse(MyAchievement)}
			</p>
		</div>
	);
};

export default Achievement;
