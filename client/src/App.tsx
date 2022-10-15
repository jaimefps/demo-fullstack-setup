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

  const flex = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  }

  return (
    <div style={flex}>
      <div
        style={{
          ...flex,
          flexDirection: "column",
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
          disabled={!InfoResult.data?.tasks?.length}
          onClick={() => {
            Update({
              variables: {
                id: InfoResult.data?.tasks?.pop()?.id ?? 0,
                title: "ClientTodo" + Date.now(),
              },
            })
          }}
        >
          Update
        </button>
        <button
          disabled={!InfoResult.data?.tasks?.length}
          onClick={() => {
            Delete({
              variables: {
                id: InfoResult.data?.tasks?.pop()?.id ?? 0,
              },
            })
          }}
        >
          Delete
        </button>
      </div>
      <div
        style={{
          width: 425,
          height: 425,
          overflow: "scroll",
        }}
      >
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
