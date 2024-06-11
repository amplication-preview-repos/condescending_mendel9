import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { GROUP_TITLE_FIELD } from "../group/GroupTitle";

export const PollShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="CreatedBy" source="createdBy" />
        <ReferenceField label="Group" source="group.id" reference="Group">
          <TextField source={GROUP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="options" source="options" />
        <TextField label="question" source="question" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
