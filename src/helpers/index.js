import collectedTasks from '../constants'

export const collectedTasksExist = (selectedProject) => {
  collectedTasks.find((task) => task.id === selectedProject)
}
