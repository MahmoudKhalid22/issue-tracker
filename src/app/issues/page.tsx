import React from "react";
import NewIssue from "../new/page";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

function Issues() {
  return (
    <div>
      <Button>
        <Link href="/new">New Issue</Link>
      </Button>
    </div>
  );
}

export default Issues;
