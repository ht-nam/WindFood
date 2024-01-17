package com.project.windfood_client.ui.dashboard;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;

import com.github.mikephil.charting.charts.BarChart;
import com.github.mikephil.charting.charts.HorizontalBarChart;
import com.github.mikephil.charting.components.XAxis;
import com.github.mikephil.charting.data.BarData;
import com.github.mikephil.charting.data.BarDataSet;
import com.github.mikephil.charting.data.BarEntry;
import com.github.mikephil.charting.formatter.ValueFormatter;
import com.github.mikephil.charting.interfaces.datasets.IBarDataSet;
import com.project.windfood_client.MainActivity;
import com.project.windfood_client.R;
import com.project.windfood_client.databinding.FragmentDashboardBinding;
import com.project.windfood_client.models.Dashboard;
import com.project.windfood_client.repositories.dashboard.DashboardRepositories;
import com.project.windfood_client.requests.DashboardRequest;
import com.project.windfood_client.utils.CustomToast;
import com.project.windfood_client.utils.SharedPrefManager;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class DashboardFragment extends Fragment{
    private FragmentDashboardBinding binding;
    private BarChart barChart;
    private HorizontalBarChart horizontalBarChart;
    private SharedPrefManager sharedPrefManager;
    private Dashboard[] dashboard;
    private DashboardRepositories dashboardRepositories;
    private List<Integer> incomeChart = new ArrayList<Integer>();
    private List<Integer> profitChart = new ArrayList<Integer>();
    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {

        binding = FragmentDashboardBinding.inflate(inflater, container, false);
        View root = binding.getRoot();
        sharedPrefManager = new SharedPrefManager(getContext());
        dashboardRepositories = new DashboardRepositories();
        for (int i = 0; i <11; i++) {
            incomeChart.add(0);
            profitChart.add(0);
        }
        DashboardRequest dashboardRequest = new DashboardRequest("10/1/2022", new Date().toString());
        System.out.println(sharedPrefManager.getToken());
        barChart = root.findViewById(R.id.barChart);
        horizontalBarChart = root.findViewById(R.id.horizontalBarChart);
        dashboardRepositories.getBillDashboard(dashboardRequest, "Bearer " + sharedPrefManager.getToken()).observe(getViewLifecycleOwner(), response -> {
            System.out.println(response.length);
            if(response.length > 0){
                //            for (int i = 0; i < response.length; i++) {
//                incomeChart.set(response[i].getMonth() - 1, Integer.parseInt(response[i].getRevenue()));
//                incomeChart.set(response[i].getMonth() - 1, Integer.parseInt(response[i].getProfit()));
//            }
                for (int i = 0; i < response.length - 1; i++) {
                    if(response[i].getRevenue() == null){
                        response[i].setRevenue("0");
                    }
                    if(response[i].getProfit() == null){
                        response[i].setProfit("0");
                    }
                    incomeChart.set(response[i].getMonth() - 1, Integer.parseInt(response[i].getRevenue()));
                    profitChart.set(response[i].getMonth() - 1, Integer.parseInt(response[i].getProfit()));
                }
            }
            setBarChartData();
            setHorizontalBarChart();
//            CustomToast.makeText(getContext(), String.valueOf(response.length), CustomToast.LENGTH_LONG, CustomToast.CONFUSING, true).show();
        });
        return root;
    }

    private void setBarChartData() {
        ArrayList<BarEntry> values = new ArrayList<>();
        for (int i = 0; i < incomeChart.size(); i++) {
            values.add(new BarEntry(i, incomeChart.get(i)));
        }
//        values.add(new BarEntry(1, 1000));
//        values.add(new BarEntry(2, 2000));
//        values.add(new BarEntry(3, 3000));
//        values.add(new BarEntry(4, 4000));
//        values.add(new BarEntry(5, 5000));
//        values.add(new BarEntry(6, 6000));
//        values.add(new BarEntry(7, 7000));
//        values.add(new BarEntry(8, 8000));
//        values.add(new BarEntry(9, 9000));
//        values.add(new BarEntry(10, 10000));
//        values.add(new BarEntry(11, 11000));
//        values.add(new BarEntry(12, 12000));

        BarDataSet set1;
        set1 = new BarDataSet(values, "Biểu đồ doanh thu");
        set1.setDrawIcons(false);

        ArrayList<IBarDataSet> dataSets = new ArrayList<>();
        dataSets.add(set1);

        BarData data = new BarData(dataSets);

        barChart.setData(data);
        XAxis xAxis = barChart.getXAxis();
        xAxis.setValueFormatter(new ValueFormatter() {
            @Override
            public String getFormattedValue(float value) {
                return "Tháng " + (int) value;
            }
        });
        barChart.invalidate();
    }

    private void setHorizontalBarChart(){
        ArrayList<BarEntry> values = new ArrayList<>();
        for (int i = 0; i < profitChart.size(); i++) {
            values.add(new BarEntry(i, profitChart.get(i)));
        }

        BarDataSet set1;
        set1 = new BarDataSet(values, "Biểu đồ lợi nhuận");
        set1.setDrawIcons(false);

        ArrayList<IBarDataSet> dataSets = new ArrayList<>();
        dataSets.add(set1);

        BarData data = new BarData(dataSets);

        horizontalBarChart.setData(data);
        horizontalBarChart.invalidate();
    }


    @Override
    public void onDestroyView() {
        super.onDestroyView();
        binding = null;
    }
}