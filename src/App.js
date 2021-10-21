import { Button, Form, Input, Layout, Modal, Space } from "antd";
import "antd/dist/antd.compact.css";

function App() {
  const [form] = Form.useForm();

  return (
    <Layout>
      <Modal
        visible={true}
        onOk={async () => {
          try {
            const values = await form.validateFields();
            console.log(values);
            form.resetFields();
          } catch (err) {}
        }}
      >
        <Form form={form}>
          <Form.List name="test">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, fieldKey, ...restField }) => (
                  <div key={key}>
                    <Space>
                      Parameters {name + 1}
                      <Button type="danger" onClick={() => remove(name)} />
                    </Space>

                    <Form.Item
                      {...restField}
                      label="first"
                      name={[name, "first"]}
                      fieldKey={[fieldKey, "first"]}
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      label="second"
                      name={[name, "second"]}
                      fieldKey={[fieldKey, "second"]}
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      label="third"
                      name={[name, "third"]}
                      fieldKey={[fieldKey, "third"]}
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  </div>
                ))}
                <Button onClick={add}>Add</Button>
              </>
            )}
          </Form.List>
        </Form>
      </Modal>
    </Layout>
  );
}

export default App;
