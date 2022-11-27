import Image from "next/image";

const ProjectItem = ({ data }) => {
  const title = data.properties.Name.title[0].plain_text;
  const githubLink = data.properties.Github.url;
  const description = data.properties.Descriotion.rich_text[0].text.content;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const startDateString = data.properties.WorkPeriod.date.start;
  const endDateString = data.properties.WorkPeriod.date.end;

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    console.log(`startDate: ${startDate}`);
    console.log(`endDate: ${endDate}`);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    console.log(`기간 : ${result}`);
    return result;
  };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        width="100"
        height="100"
        objectFit="cover"
        layout="responsive"
        quality={100}
        alt="cover image"
      />
      <div className="flex flex-col p-4 ">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <a href={githubLink}>깃허브 바로가기</a>
        <h3 className="mt-4 text-xl">
          작업기간 : {startDateString} ~ {endDateString} (
          {calculatedPeriod(startDateString, endDateString)}일)
        </h3>

        <div className="flex items-start mt-2">
          {tags.map((item) => (
            <h1
              key={item.id}
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
            >
              {item.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
