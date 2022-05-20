import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger }: { Dragger: Function } = Upload;

interface IUploadBox {
  onChange(...args: any[]): void;
}

function UploadBox({ onChange }: IUploadBox) {
  function onChangeHandler(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }

    onChange(info);
  }

  return (
    <div>
      <Dragger
        name="file"
        accept=".json"
        multiple={false}
        maxCount={1}
        onChange={onChangeHandler}
        customRequest={({ onSuccess }) => {
          onSuccess();
        }}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload.
        </p>
      </Dragger>
    </div>
  );
}

export default UploadBox;
