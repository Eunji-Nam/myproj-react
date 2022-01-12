import Button from 'compomemts/Button';
import DebugStates from 'compomemts/DebugStates';
import H2 from 'compomemts/H2';
import useFieldValues from 'hook/usefieldValues';

const INIT_FIELD_VALUES = { title: '', content: '' };

function PageNewsArticleForm() {
  const { fieldValues, handleFieldChange } = useFieldValues(INIT_FIELD_VALUES);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submited !!!');
  };

  return (
    <div>
      <H2>Article Form</H2>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <input
            name="title"
            value={fieldValues.title}
            onChange={handleFieldChange}
            type="text"
            className="p-1 bg-gray-100 w-full outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
        </div>

        <div className="my-3">
          <textarea
            name="content"
            value={fieldValues.content}
            onChange={handleFieldChange}
            className="p-1 bg-gray-100 w-full h-80 outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
        </div>

        <div className="my-3">
          <Button>저장하기</Button>
        </div>
      </form>
      <DebugStates fieldValues={fieldValues} />
    </div>
  );
}

export default PageNewsArticleForm;
