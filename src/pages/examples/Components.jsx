import Alert from 'compomemts/Alert';

function Components() {
  return (
    <div>
      <h2 className="text-xl border-l-8 border-red-500 pl-1 mb-2">
        Components
      </h2>
      <h3 className="text-lg border-l-4 border-red-500 pl-1 mb-2">Alerts</h3>
      <Alert type="info" message="info 메시지" />
      <Alert type="success" message="success 메시지" />
      <Alert type="danger" message="danger 메시지" />
      <Alert type="warning" message="warning 메시지" />
    </div>
  );
}

export default Components;
