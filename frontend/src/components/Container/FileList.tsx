import { DataGrid, type GridColDef } from "@mui/x-data-grid";

function FileList() {
  const rows = useFileList();
  const columns: GridColDef[] = [
    { field: "datetime", headerName: "Date Time", width: 180 },
    { field: "filename", headerName: "File Name", flex: 1 },
    { field: "status", headerName: "Status", width: 100 },
  ];
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
    />
  );
}

const useFileList = () => {
  return [
    createData(1, "2024-12-02 15:23:31", "sample_6.png", "Processing"),
    createData(2, "2024-11-03 18:04:36", "sample_5.png", "Done"),
    createData(3, "2024-10-05 09:01:17", "sample_4.png", "Done"),
    createData(4, "2024-09-03 09:01:17", "sample_3_1.png", "Done"),
    createData(6, "2024-09-01 15:25:45", "sample_3.png", "Error"),
    createData(5, "2024-08-03 16:58:45", "sample_2.png", "Done"),
    createData(7, "2024-07-01 13:45:22", "sample_1.png", "Done"),
  ];
};

const createData = (
  id: number,
  datetime: string,
  filename: string,
  status: string,
) => {
  return { id, datetime, filename, status };
};

export default FileList;
