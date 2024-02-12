import {
  TextArea,
  TextField,
  TextFieldInput,
  TextFieldRoot,
} from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

function NewIssue() {
  return (
    <div className="w-1/2">
      <TextFieldRoot className="mb-4">
        <TextFieldInput placeholder="Search the docs…" />
      </TextFieldRoot>
      <TextArea placeholder="content of issue here" className="h-32" />
    </div>
  );
}

export default NewIssue;
