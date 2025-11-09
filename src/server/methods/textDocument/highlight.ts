import { RequestMessage } from "../../server";
import { documents, TextDocumentIdentifier } from "../../documents";
import log from "../../log";
import * as fs from "fs";
import { Position } from "../../types";

const MAX_LENGTH = 1000;

const words = fs.readFileSync(__dirname.replace("\\out", "\\src") + "\\dictionary.txt").toString().split("\r\n");

type CompletionItem = {
  label: string;
};

interface SemanticResponse {
}

interface TextDocumentPositionParams {
  textDocument: TextDocumentIdentifier;
  position: Position;
}

export interface CompletionParams extends TextDocumentPositionParams {}

export const syntaxHighlight = (message: RequestMessage): SemanticResponse | null => {

  return {
    "response": {
        "data": [
            0, 5, 3, 0, 0
        ]
    }
  }
};
