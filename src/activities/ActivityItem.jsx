import useMutation from "../api/useMutation";

export default function ActivityItem({ activity, canDelete }) {
  const {
    mutate: deleteActivity,
    loading: deleting,
    error: deleteError,
  } = useMutation("DELETE", `/activities/${activity.id}`, ["activities"]);

  return (
    <li>
      <strong>{activity.name}</strong>
      <br/>
      {canDelete && (
        <button
          onClick={() => deleteActivity()}
          disabled={deleting}
        >
          {deleting ? "Deleting…" : "Delete"}
        </button>
      )}
      {deleteError}
    </li>
  );
}