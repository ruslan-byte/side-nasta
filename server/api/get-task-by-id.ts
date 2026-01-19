import tasks from "../storage/tasks.json";
export default defineEventHandler(async (event) => {
  const lesstionIdList = getQuery(event).id;
  if (!lesstionIdList) return { status: "error" };

  const actualTasks = tasks.filter((task) =>
    task.lession_ids.find((taskLessionId) =>
      lesstionIdList.split(",").includes("" + taskLessionId),
    ),
  );
  console.log(`actualTasks`, actualTasks);
  return actualTasks;
});
