export const data = {
  chartData: {
    1: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: {
        label: 'Sample Data1',
        data: [10, 20, 30, 40, 50, 30]
      }
    },
    2: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: {
        label: 'Sample Data2',
        data: [30, 10, 40, 50, 20, 30]
      }
    },
    3: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: {
        label: 'Sample Data3',
        data: [20, 50, 10, 40, 50, 20]
      }
    }
  }
}

type TDataItem = {
  labels: string[];
  datasets: any;
}

export type TChartData = {
  1: TDataItem;
  2: TDataItem;
  3: TDataItem;
}

export type TData = {
  chartData: TChartData;
}
