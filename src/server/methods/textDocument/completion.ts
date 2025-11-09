import { RequestMessage } from "../../server";
import { documents, TextDocumentIdentifier } from "../../documents";
import log from "../../log";
import * as fs from "fs";
import { Position } from "../../types";
<<<<<<< HEAD
import dotenv from 'dotenv';
import path from "path";
dotenv.config({path: path.resolve(__dirname, '../../../../.env')} );

=======
// import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js';
// import 'dotenv/config'
>>>>>>> 9587bb3002a945a2d5e67c3c6e14ef1c0c0175ef


const MAX_LENGTH = 1000;

const words = fs.readFileSync(__dirname.replace("\\out", "\\src") + "\\dictionary.txt").toString().split("\r\n");

type CompletionItem = {
  label: string;
};

interface CompletionList {
  isIncomplete: boolean;
  items: CompletionItem[];
}

interface TextDocumentPositionParams {
  textDocument: TextDocumentIdentifier;
  position: Position;
}

export interface CompletionParams extends TextDocumentPositionParams {}

export const completion = (message: RequestMessage): CompletionList | null => {
  const params = message.params as CompletionParams;
  const content = documents.get(params.textDocument.uri);

  var itemList = []
  for (let i: number = 0; i < words.length; i++) {
    itemList.push({label: words[i]})
  }


  return {
    isIncomplete: false,
    items: itemList
  }

  // if (!content) {
  //   log.write("null content")
  //   return null;
  // }

  // const currentLine = content.split("\n")[params.position.line];
  // const lineUntilCursor = currentLine.slice(0, params.position.character);
  // const currentPrefix = lineUntilCursor.replace(/.*[\W ](.*?)/, "$1");

  // const items = words
  //   .filter((word) => {
  //     return word.startsWith(currentPrefix);
  //   })
  //   .slice(0, MAX_LENGTH)
  //   .map((word) => {
  //     return { label: word };
  //   });

  // return {
  //   isIncomplete: items.length === MAX_LENGTH,
  //   items,
  // };
};
