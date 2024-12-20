// Copyright 2023 YOUR NAME HERE
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { useState } from 'react';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import * as TaskContext from '../@types/context';
import { TextField, Button, Paper } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';

const AddEvents = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 400,
        p: 2,
      }}
    >
      <Typography
        variant='h5'
        component='h2'
        align='center'
        gutterBottom={true}
      >
        Create A Task
      </Typography>

      <Grid container direction='row' spacing={2}>
        <Grid item xs={6}>
          <DatePicker />
        </Grid>
        <Grid item xs={6}>
          <TimePicker
            label='Select a Time'
            defaultValue={dayjs('2022-04-17T15:30')}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextField
            label='Event Description'
            variant='outlined'
            multiline
            rows={8}
            fullWidth={true}
            sx={{}}
          />
        </Grid>
        <Grid
          item
          xs={12}
          width={'100%'}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            sx={{
              m: 2,
            }}
            variant='contained'
            fullWidth={true}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddEvents;
