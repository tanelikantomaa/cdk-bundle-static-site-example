#!/usr/bin/env node
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { PipelineStack } from '../lib/pipeline-stack';
import { AppStage } from '../lib/app-stage';

const app = new cdk.App();

const delivery = new PipelineStack(app, 'Frontend-DeliveryPipeline', {
  name: 'Frontend',
  env: {
    account: '838837044885',
    region: 'eu-west-2'
  }
});

delivery.pipeline.addApplicationStage(
  new AppStage(app, 'App', {
    apiUrl: 'https://ppln1fdf6c.execute-api.eu-west-2.amazonaws.com/hello', // this should be the HTTP API url from the cdk-bundle-go-lambda-example app
    env: {
      account: '838837044885',
      region: 'eu-west-2',
    },
  })
);
