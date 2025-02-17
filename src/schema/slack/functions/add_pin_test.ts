/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../workflows/mod.ts";
import { ManifestFunctionSchema } from "../../../manifest/manifest_schema.ts";
import SchemaTypes from "../../schema_types.ts";
import SlackTypes from "../schema_types.ts";
import AddPin from "./add_pin.ts";

Deno.test("AddPin generates valid FunctionManifest", () => {
  assertEquals(AddPin.definition.callback_id, "slack#/functions/add_pin");
  const expected: ManifestFunctionSchema = {
    source_file: "",
    title: "Pin to channel",
    description: "Pin a message to a channel",
    input_parameters: {
      properties: {
        channel_id: {
          type: SlackTypes.channel_id,
          description: "Search all channels",
          title: "Select a channel",
        },
        message: {
          type: SchemaTypes.string,
          description: "Enter a message URL or message timestamp",
          title: "Message URL or message timestamp",
        },
      },
      required: ["channel_id", "message"],
    },
    output_parameters: { properties: {}, required: [] },
  };
  const actual = AddPin.export();

  assertEquals(actual, expected);
});

Deno.test("AddPin can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_AddPin_slack_function",
    title: "Test AddPin",
    description: "This is a generated test to test AddPin",
  });
  testWorkflow.addStep(AddPin, { channel_id: "test", message: "test" });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "slack#/functions/add_pin");
  assertEquals(actual.inputs, { channel_id: "test", message: "test" });
});
