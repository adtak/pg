#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { ImageDrawerStack } from "../lib/iac-stack";

const app = new cdk.App();
const env = {
  account: process.env.AWS_ACCOUNT,
  region: "ap-northeast-1",
};
new ImageDrawerStack(app, "ImageDrawerStack", { env });
