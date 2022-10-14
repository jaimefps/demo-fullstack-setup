import {
  useTaskContainerQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} from "../generated/graphql-codegen"

function App() {
  const InfoResult = useTaskContainerQuery()

  const mutationConfig = {
    onCompleted() {
      InfoResult.refetch()
    },
  }

  const [Create, CreateResult] = useCreateTaskMutation(mutationConfig)
  const [Update, UpdateResult] = useUpdateTaskMutation(mutationConfig)
  const [Delete, DeleteResult] = useDeleteTaskMutation(mutationConfig)

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <button
        onClick={() =>
          Create({
            variables: {
              title: "ClientTodo",
            },
          })
        }
      >
        Create
      </button>
      <button
        onClick={() => {
          if (InfoResult.data?.tasks?.length ?? 0 > 0) {
            Update({
              variables: {
                id: InfoResult.data?.tasks?.pop()?.id ?? 0,
                title: "ClientTodo" + Date.now(),
              },
            })
          }
        }}
      >
        Update
      </button>
      <button
        onClick={() => {
          if (InfoResult.data?.tasks?.length ?? 0 > 0) {
            Delete({
              variables: {
                id: InfoResult.data?.tasks?.pop()?.id ?? 0,
              },
            })
          }
        }}
      >
        Delete
      </button>
      <div>
        <pre>
          {InfoResult.loading
            ? "loading..."
            : JSON.stringify(InfoResult.data, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export default App
