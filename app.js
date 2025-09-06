// APAC Ethanol Market Intelligence Dashboard - Enhanced Version (FIXED)
// Professional JavaScript implementation with Chart.js

// Chart.js color palette
const CHART_COLORS = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// Enhanced market data from provided JSON
const marketData = {
  market_overview: {
    apac_market_share: 27.6,
    total_demand_2024: 25165,
    supply_gap: 11411,
    growth_rate_2024_2030: 24.1,
    capacity_breakdown: {
      "India": 6571,
      "China": 6699,
      "Southeast Asia": 484
    },
    demand_forecast: {
      "2024": 25165,
      "2025": 26001,
      "2026": 26922,
      "2027": 27928,
      "2028": 28982,
      "2029": 30109,
      "2030": 31234
    }
  },
  supply_demand: {
    regional_analysis: {
      "India": {
        capacity: 6571,
        estimated_demand: 8500,
        gap: -1929
      },
      "China": {
        capacity: 6699,
        estimated_demand: 10000,
        gap: -3301
      },
      "Southeast Asia": {
        capacity: 484,
        estimated_demand: 6665,
        gap: -6181
      }
    }
  },
  enhanced_trade_flows: {
    global_pricing_2025: {
      "USA_FOB_Texas": {
        avg_price: 615.56,
        monthly_prices: [598, 630, 605, 633, 624, 593, 612, 629, 611],
        capacity_kt: 67762.49,
        production_kt: 53049.24,
        supply_gap_kt: 2534.48,
        key_insight: "Export-driven; stable supply, moderate growth"
      },
      "Brazil_FOB_Santos": {
        avg_price: 727.72,
        monthly_prices: [701, 774, 751, 723, 740, 704, 714, 726, 712],
        capacity_kt: 43322.03,
        production_kt: 30845.94,
        supply_gap_kt: -2603.58,
        key_insight: "Supply gap, price volatility; feedstock-driven"
      },
      "China_Ex_Shanghai": {
        avg_price: 651.52,
        monthly_prices: [621, 619, 635, 624, 643, 666, 689, 685, 672],
        key_insight: "Firmness on feedstock costs; steady growth"
      },
      "South_Korea_CFR_Ulsan": {
        avg_price: 680.77,
        monthly_prices: [666, 701, 681, 709, 691, 648, 671, 686, 674],
        key_insight: "Import-dependent, blending-driven"
      },
      "Germany_CFR_Hamburg": {
        avg_price: 663.0,
        monthly_prices: [653, 688, 666, 693, 673, 646, 683, 702],
        capacity_kt: 9945.9,
        supply_gap_kt: -295.32,
        key_insight: "Firm prices, regulatory mandates"
      },
      "India_Ex_Delhi_NCR": {
        avg_price: 984.47,
        monthly_prices: [962, 989, 1012, 998, 1028, 959, 968, 888, 870.24],
        capacity_kt: 13098.77,
        production_kt: 9575.89,
        yoy_growth: 12.47,
        key_insight: "High demand, strong policy support"
      },
      "UK_Immingham": {
        avg_price: 652.67,
        monthly_prices: [633, 668, 646, 673, 653, 624, 647, 664, 646],
        key_insight: "Stable market; regulatory support"
      },
      "Belgium_Antwerp": {
        avg_price: 689.63,
        monthly_prices: [638, 686, 664, 713, 703, 676, 710, 727],
        key_insight: "Competitive port, intra-EU trade"
      },
      "Netherlands_FD_Rotterdam": {
        avg_price: 681.39,
        monthly_prices: [648, 683, 661, 705, 693, 664, 690, 707],
        key_insight: "Key EU hub, prices track EU average"
      },
      "Philippines_CIF_Manila": {
        avg_price: 703.82,
        monthly_prices: [701, 736, 716, 744, 702, 654, 679, 693],
        key_insight: "Regional demand, price swings"
      }
    },
    freight_costs: {
      us_gulf_to_apac_cents_per_liter: 6.2,
      brazil_to_apac_cents_per_liter: 6.9,
      us_gulf_to_india_delivered: 706.55,
      brazil_to_india_delivered: 770.90
    },
    global_exports_2024: {
      "USA": 3520,
      "Brazil": 1489,
      "Netherlands": 1004,
      "Others": 4816
    },
    apac_imports_2024: {
      "Japan": 756,
      "Philippines": 168,
      "China_India_Others": 2500
    }
  },
  india_enhanced_scenario: {
    current_e20: {
      fuel_demand: 8016,
      other_sectors: 2635,
      total_demand: 10652
    },
    proposed_e15: {
      fuel_demand: 6012,
      other_sectors: 2635,
      total_demand: 8647
    },
    cross_sector_pricing: {
      fuel_ethanol_government_rates: {
        sugarcane_juice: 65.61,
        b_heavy_molasses: 60.73,
        c_heavy_molasses: 57.97,
        maize: 71.8
      },
      industrial_alcohol_range: [34, 38],
      beverage_sector: "Premium pricing"
    },
    gasoline_impact: {
      total_petroleum_consumption_mt: 233,
      gasoline_share_percent: 16,
      crude_import_dependency: 88.2,
      e20_price_reduction_range: [3.5, 5.1],
      annual_forex_savings_crore: 43000
    },
    cross_sector_demand_2025: {
      industrial_solvent: 2090,
      fuel_additives: 5207,
      beverage: 1848,
      disinfectant: 271,
      others: 426
    },
    impact: {
      demand_reduction: 2004,
      percentage_reduction: 18.8,
      import_savings_million: 1203,
      self_sufficiency_improvement: 49.1
    }
  },
  apac_countries: {
    "Japan": {
      import_dependency: "High",
      market_characteristics: "Sophisticated import infrastructure",
      import_tariff_percent: 10,
      key_insight: "Well-developed import market"
    },
    "South_Korea": {
      imports_2023_mt: 178.824,
      imports_2024_avg_monthly_mt: 11.430,
      yoy_change_percent: -23.3,
      key_insight: "Declining import volumes"
    },
    "Thailand": {
      price_reduction_potential_percent: 17,
      blending_target: "National biofuel policy",
      key_insight: "Strong policy support"
    },
    "Indonesia": {
      current_capacity_million_liters: 350,
      current_mandate_percent: 5,
      target_mandate_percent: 20,
      target_year: 2025,
      key_insight: "Rapid capacity expansion"
    },
    "Philippines": {
      fuel_ethanol_consumption_2025_million_liters: 840,
      mandatory_blending_percent: 10,
      voluntary_e20_approved: true,
      expected_imports_2025_million_liters: 450,
      key_insight: "Growing import market"
    }
  },
  policy_impact: {
    blending_mandates: {
      "India": {"current": 20, "target": 30, "target_year": 2030},
      "Indonesia": {"current": 5, "target": 20, "target_year": 2025},
      "Philippines": {"current": 10, "voluntary": 20},
      "Vietnam": {"current": 5, "notes": "Voluntary"},
      "Thailand": {"current": "Country-specific targets"}
    }
  }
};

// Global chart instances
let charts = {};

// Initialize dashboard on DOM load
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Initializing Enhanced APAC Ethanol Market Intelligence Dashboard...');
  
  // Initialize all components
  initializeTabs();
  initializeSlider(); // CRITICAL: Maintain existing slider functionality
  initializeCountryTabs();
  initializeArbitrageCalculator();
  
  // Initialize default charts
  setTimeout(() => {
    initializeMarketOverviewCharts();
  }, 100);
  
  console.log('✅ Enhanced Dashboard initialization complete');
});

// FIXED: Tab functionality (enhanced to support 6 tabs)
function initializeTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  console.log('Initializing tabs...', tabButtons.length, 'buttons found');

  tabButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = button.getAttribute('data-tab');
      
      console.log('Tab clicked:', targetTab);
      
      // Remove active class from all buttons and panels
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));
      
      // Add active class to clicked button and corresponding panel
      button.classList.add('active');
      const targetPanel = document.getElementById(targetTab);
      if (targetPanel) {
        targetPanel.classList.add('active');
        console.log('Panel activated:', targetTab);
        
        // Initialize charts for the active tab with a small delay
        setTimeout(() => {
          initializeChartsForTab(targetTab);
        }, 150);
      } else {
        console.error('Panel not found:', targetTab);
      }
    });
  });
}

// FIXED: Chart initialization router
function initializeChartsForTab(tabName) {
  console.log('Initializing charts for tab:', tabName);
  
  switch(tabName) {
    case 'market-overview':
      initializeMarketOverviewCharts();
      break;
    case 'supply-demand':
      initializeSupplyDemandCharts();
      break;
    case 'trade-flows':
      initializeTradeFlowsCharts();
      break;
    case 'india-scenario':
      initializeIndiaScenarioCharts();
      break;
    case 'global-pricing':
      initializeGlobalPricingCharts();
      break;
    case 'apac-countries':
      initializeApacCountriesCharts();
      break;
    default:
      console.log('No charts to initialize for tab:', tabName);
  }
}

// Market Overview Charts (EXISTING - MAINTAINED)
function initializeMarketOverviewCharts() {
  console.log('Initializing Market Overview charts...');
  
  // Capacity Breakdown Pie Chart
  const capacityCtx = document.getElementById('capacity-breakdown-chart');
  if (capacityCtx && !charts.capacityBreakdown) {
    const capacityData = marketData.market_overview.capacity_breakdown;
    const total = Object.values(capacityData).reduce((sum, val) => sum + val, 0);
    
    charts.capacityBreakdown = new Chart(capacityCtx, {
      type: 'pie',
      data: {
        labels: Object.keys(capacityData),
        datasets: [{
          data: Object.values(capacityData),
          backgroundColor: CHART_COLORS.slice(0, 3),
          borderColor: '#ffffff',
          borderWidth: 2,
          hoverBorderWidth: 3,
          hoverBorderColor: '#1FB8CD'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 20,
              usePointStyle: true,
              font: {
                size: 12,
                weight: '500'
              }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#1FB8CD',
            bodyColor: '#ffffff',
            borderColor: '#1FB8CD',
            borderWidth: 1,
            cornerRadius: 8,
            callbacks: {
              label: function(context) {
                const percentage = ((context.parsed / total) * 100).toFixed(1);
                return `${context.label}: ${context.parsed.toLocaleString()} MT (${percentage}%)`;
              }
            }
          }
        },
        animation: {
          animateRotate: true,
          duration: 1500
        }
      }
    });
  }

  // Demand Forecast Line Chart
  const forecastCtx = document.getElementById('demand-forecast-chart');
  if (forecastCtx && !charts.demandForecast) {
    const forecastData = marketData.market_overview.demand_forecast;
    
    charts.demandForecast = new Chart(forecastCtx, {
      type: 'line',
      data: {
        labels: Object.keys(forecastData),
        datasets: [{
          label: 'APAC Demand (Thousand Tonnes)',
          data: Object.values(forecastData),
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#1FB8CD',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: 'index'
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#1FB8CD',
            bodyColor: '#ffffff',
            borderColor: '#1FB8CD',
            borderWidth: 1,
            cornerRadius: 8,
            callbacks: {
              title: function(context) {
                return `Year: ${context[0].label}`;
              },
              label: function(context) {
                return `Demand: ${context.parsed.y.toLocaleString()} thousand tonnes`;
              },
              afterLabel: function(context) {
                const index = context.dataIndex;
                if (index > 0) {
                  const current = context.parsed.y;
                  const previous = Object.values(forecastData)[index - 1];
                  const growth = ((current - previous) / previous * 100).toFixed(1);
                  return `YoY Growth: ${growth}%`;
                }
                return '';
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: '#666'
            }
          },
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: '#666',
              callback: function(value) {
                return (value / 1000).toFixed(0) + 'K MT';
              }
            }
          }
        },
        animation: {
          duration: 2000,
          easing: 'easeInOutCubic'
        }
      }
    });
  }
}

// Supply-Demand Analysis Charts (EXISTING - MAINTAINED)
function initializeSupplyDemandCharts() {
  console.log('Initializing Supply-Demand charts...');
  
  const capacityDemandCtx = document.getElementById('capacity-demand-chart');
  if (capacityDemandCtx && !charts.capacityDemand) {
    const regionalData = marketData.supply_demand.regional_analysis;
    const countries = Object.keys(regionalData);
    const capacityData = countries.map(country => regionalData[country].capacity);
    const demandData = countries.map(country => regionalData[country].estimated_demand);
    
    charts.capacityDemand = new Chart(capacityDemandCtx, {
      type: 'bar',
      data: {
        labels: countries,
        datasets: [
          {
            label: 'Capacity (MT)',
            data: capacityData,
            backgroundColor: '#1FB8CD',
            borderColor: '#1FB8CD',
            borderWidth: 1,
            borderRadius: 4
          },
          {
            label: 'Estimated Demand (MT)',
            data: demandData,
            backgroundColor: '#FFC185',
            borderColor: '#FFC185',
            borderWidth: 1,
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              padding: 20,
              usePointStyle: true
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#1FB8CD',
            bodyColor: '#ffffff',
            borderColor: '#1FB8CD',
            borderWidth: 1,
            cornerRadius: 8,
            callbacks: {
              label: function(context) {
                const gap = regionalData[context.label].gap;
                const gapText = gap < 0 ? `Deficit: ${Math.abs(gap).toLocaleString()} MT` : `Surplus: ${gap.toLocaleString()} MT`;
                return [`${context.dataset.label}: ${context.parsed.y.toLocaleString()} MT`, gapText];
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#666'
            }
          },
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: '#666',
              callback: function(value) {
                return (value / 1000).toFixed(0) + 'K MT';
              }
            }
          }
        },
        animation: {
          duration: 1500,
          easing: 'easeOutBounce'
        }
      }
    });
  }
}

// Enhanced Trade Flows Charts
function initializeTradeFlowsCharts() {
  console.log('Initializing Trade Flows charts...');
  
  // NEW: Price Trends Chart
  const priceTrendsCtx = document.getElementById('price-trends-chart');
  if (priceTrendsCtx && !charts.priceTrends) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
    
    charts.priceTrends = new Chart(priceTrendsCtx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [
          {
            label: 'USA FOB',
            data: marketData.enhanced_trade_flows.global_pricing_2025.USA_FOB_Texas.monthly_prices,
            borderColor: CHART_COLORS[0],
            backgroundColor: CHART_COLORS[0] + '20',
            borderWidth: 2,
            tension: 0.4
          },
          {
            label: 'Brazil FOB',
            data: marketData.enhanced_trade_flows.global_pricing_2025.Brazil_FOB_Santos.monthly_prices,
            borderColor: CHART_COLORS[1],
            backgroundColor: CHART_COLORS[1] + '20',
            borderWidth: 2,
            tension: 0.4
          },
          {
            label: 'India Ex-Delhi',
            data: marketData.enhanced_trade_flows.global_pricing_2025.India_Ex_Delhi_NCR.monthly_prices,
            borderColor: CHART_COLORS[2],
            backgroundColor: CHART_COLORS[2] + '20',
            borderWidth: 2,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: 'index'
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              padding: 15,
              usePointStyle: true
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#1FB8CD',
            bodyColor: '#ffffff',
            borderColor: '#1FB8CD',
            borderWidth: 1,
            cornerRadius: 8
          }
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: '#666'
            }
          },
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: '#666',
              callback: function(value) {
                return '$' + value.toFixed(0);
              }
            }
          }
        }
      }
    });
  }

  // Global Exports Chart (EXISTING)
  const exportsCtx = document.getElementById('exports-chart');
  if (exportsCtx && !charts.exports) {
    const exportsData = marketData.enhanced_trade_flows.global_exports_2024;
    const total = Object.values(exportsData).reduce((sum, val) => sum + val, 0);
    
    charts.exports = new Chart(exportsCtx, {
      type: 'bar',
      data: {
        labels: Object.keys(exportsData),
        datasets: [{
          label: 'Exports (Thousand Tonnes)',
          data: Object.values(exportsData),
          backgroundColor: CHART_COLORS.slice(0, 4),
          borderColor: '#ffffff',
          borderWidth: 1,
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#1FB8CD',
            bodyColor: '#ffffff',
            borderColor: '#1FB8CD',
            borderWidth: 1,
            cornerRadius: 8,
            callbacks: {
              label: function(context) {
                const percentage = ((context.parsed.x / total) * 100).toFixed(1);
                return `${context.parsed.x.toLocaleString()} thousand tonnes (${percentage}%)`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: '#666',
              callback: function(value) {
                return (value / 1000).toFixed(0) + 'K MT';
              }
            }
          },
          y: {
            grid: {
              display: false
            },
            ticks: {
              color: '#666'
            }
          }
        },
        animation: {
          duration: 1800,
          easing: 'easeInOutQuart'
        }
      }
    });
  }
}

// India Scenario Charts (EXISTING - MAINTAINED)
function initializeIndiaScenarioCharts() {
  console.log('Initializing India Scenario charts...');
  
  const economicCtx = document.getElementById('economic-impact-chart');
  if (economicCtx && !charts.economicImpact) {
    const currentData = marketData.india_enhanced_scenario.current_e20;
    const proposedData = marketData.india_enhanced_scenario.proposed_e15;
    
    charts.economicImpact = new Chart(economicCtx, {
      type: 'bar',
      data: {
        labels: ['Fuel Demand', 'Other Sectors', 'Total Demand'],
        datasets: [
          {
            label: 'Current E20 (MT)',
            data: [currentData.fuel_demand, currentData.other_sectors, currentData.total_demand],
            backgroundColor: '#1FB8CD',
            borderColor: '#1FB8CD',
            borderWidth: 1,
            borderRadius: 4
          },
          {
            label: 'Proposed E15 (MT)',
            data: [proposedData.fuel_demand, proposedData.other_sectors, proposedData.total_demand],
            backgroundColor: '#FFC185',
            borderColor: '#FFC185',
            borderWidth: 1,
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              padding: 20,
              usePointStyle: true
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#1FB8CD',
            bodyColor: '#ffffff',
            borderColor: '#1FB8CD',
            borderWidth: 1,
            cornerRadius: 8,
            callbacks: {
              label: function(context) {
                return `${context.dataset.label}: ${context.parsed.y.toLocaleString()} MT`;
              },
              afterLabel: function(context) {
                if (context.datasetIndex === 1 && context.dataIndex < 2) {
                  const current = [currentData.fuel_demand, currentData.other_sectors][context.dataIndex];
                  const proposed = context.parsed.y;
                  const difference = proposed - current;
                  const percentage = ((difference / current) * 100).toFixed(1);
                  return `Change: ${difference.toLocaleString()} MT (${percentage}%)`;
                }
                return '';
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#666'
            }
          },
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: '#666',
              callback: function(value) {
                return (value / 1000).toFixed(0) + 'K MT';
              }
            }
          }
        },
        animation: {
          duration: 1500,
          easing: 'easeOutCubic'
        }
      }
    });
  }
}

// NEW: Global Pricing Analytics Charts
function initializeGlobalPricingCharts() {
  console.log('Initializing Global Pricing charts...');
  
  const globalPriceTrendsCtx = document.getElementById('global-price-trends-chart');
  if (globalPriceTrendsCtx && !charts.globalPriceTrends) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
    const pricingData = marketData.enhanced_trade_flows.global_pricing_2025;
    
    const datasets = [
      {
        label: 'USA FOB',
        data: pricingData.USA_FOB_Texas.monthly_prices,
        borderColor: CHART_COLORS[0],
        backgroundColor: CHART_COLORS[0] + '20',
        borderWidth: 3,
        tension: 0.4
      },
      {
        label: 'Brazil FOB',
        data: pricingData.Brazil_FOB_Santos.monthly_prices,
        borderColor: CHART_COLORS[1],
        backgroundColor: CHART_COLORS[1] + '20',
        borderWidth: 3,
        tension: 0.4
      },
      {
        label: 'China',
        data: pricingData.China_Ex_Shanghai.monthly_prices,
        borderColor: CHART_COLORS[2],
        backgroundColor: CHART_COLORS[2] + '20',
        borderWidth: 3,
        tension: 0.4
      },
      {
        label: 'South Korea',
        data: pricingData.South_Korea_CFR_Ulsan.monthly_prices,
        borderColor: CHART_COLORS[3],
        backgroundColor: CHART_COLORS[3] + '20',
        borderWidth: 3,
        tension: 0.4
      },
      {
        label: 'India',
        data: pricingData.India_Ex_Delhi_NCR.monthly_prices,
        borderColor: CHART_COLORS[4],
        backgroundColor: CHART_COLORS[4] + '20',
        borderWidth: 3,
        tension: 0.4
      }
    ];
    
    charts.globalPriceTrends = new Chart(globalPriceTrendsCtx, {
      type: 'line',
      data: {
        labels: months,
        datasets: datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: 'index'
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              padding: 15,
              usePointStyle: true,
              font: {
                size: 12
              }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            titleColor: '#1FB8CD',
            bodyColor: '#ffffff',
            borderColor: '#1FB8CD',
            borderWidth: 1,
            cornerRadius: 8,
            callbacks: {
              title: function(context) {
                return `${context[0].label} 2025`;
              },
              label: function(context) {
                return `${context.dataset.label}: $${context.parsed.y.toFixed(2)}/MT`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: '#666'
            }
          },
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: '#666',
              callback: function(value) {
                return '$' + value.toFixed(0);
              }
            }
          }
        },
        animation: {
          duration: 2000,
          easing: 'easeInOutCubic'
        }
      }
    });
  }
}

// NEW: APAC Countries Charts
function initializeApacCountriesCharts() {
  console.log('Initializing APAC Countries charts...');
  
  const mandatesCtx = document.getElementById('mandates-comparison-chart');
  if (mandatesCtx && !charts.mandatesComparison) {
    const mandateData = marketData.policy_impact.blending_mandates;
    const countries = Object.keys(mandateData);
    const currentMandates = countries.map(country => mandateData[country].current || 0);
    const targetMandates = countries.map(country => mandateData[country].target || mandateData[country].current || 0);
    
    charts.mandatesComparison = new Chart(mandatesCtx, {
      type: 'bar',
      data: {
        labels: countries,
        datasets: [
          {
            label: 'Current Mandate (%)',
            data: currentMandates,
            backgroundColor: '#1FB8CD',
            borderColor: '#1FB8CD',
            borderWidth: 1,
            borderRadius: 4
          },
          {
            label: 'Target Mandate (%)',
            data: targetMandates,
            backgroundColor: '#FFC185',
            borderColor: '#FFC185',
            borderWidth: 1,
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              padding: 20,
              usePointStyle: true
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#1FB8CD',
            bodyColor: '#ffffff',
            borderColor: '#1FB8CD',
            borderWidth: 1,
            cornerRadius: 8,
            callbacks: {
              label: function(context) {
                const countryData = mandateData[context.label];
                let result = `${context.dataset.label}: ${context.parsed.y}%`;
                if (countryData.target_year) {
                  result += ` (Target: ${countryData.target_year})`;
                }
                if (countryData.notes) {
                  result += ` - ${countryData.notes}`;
                }
                return result;
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#666'
            }
          },
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: '#666',
              callback: function(value) {
                return value + '%';
              }
            }
          }
        }
      }
    });
  }
}

// Interactive Blending Slider (EXISTING - CRITICAL TO MAINTAIN)
function initializeSlider() {
  console.log('Initializing blending slider...');
  
  const slider = document.getElementById('blending-slider');
  const valueDisplay = document.getElementById('blending-value');
  const totalDemandEl = document.getElementById('total-demand');
  const importReqEl = document.getElementById('import-req');
  const costImpactEl = document.getElementById('cost-impact');
  const selfSufficiencyEl = document.getElementById('self-sufficiency');

  if (!slider) {
    console.error('Blending slider not found!');
    return;
  }

  // Base values for calculations (E20 scenario)
  const baseFuelConsumption = 80160; // thousand tonnes fuel consumption at E20
  const baseEthanolInFuel = 8016; // thousand tonnes ethanol in fuel at E20
  const otherSectors = 2635; // thousand tonnes for other sectors (constant)
  const domesticCapacity = 6571; // thousand tonnes domestic capacity
  const ethanolPrice = 600; // USD per tonne (estimated)

  function updateScenario(blendingPercent) {
    console.log('Updating scenario for blending:', blendingPercent + '%');
    
    // Calculate ethanol demand for fuel based on blending percentage
    const ethanolInFuel = (baseFuelConsumption * blendingPercent) / 100;
    const totalDemand = ethanolInFuel + otherSectors;
    
    // Calculate import requirements
    const importRequirement = Math.max(0, totalDemand - domesticCapacity);
    
    // Calculate cost impact relative to E20
    const e20TotalDemand = baseEthanolInFuel + otherSectors;
    const demandDifference = totalDemand - e20TotalDemand;
    const costImpact = demandDifference * ethanolPrice;
    
    // Calculate self-sufficiency
    const selfSufficiency = Math.min(100, (domesticCapacity / totalDemand) * 100);

    // Update display values
    if (valueDisplay) valueDisplay.textContent = blendingPercent;
    if (totalDemandEl) totalDemandEl.textContent = `${(totalDemand / 1000).toFixed(1)}M MT`;
    if (importReqEl) importReqEl.textContent = `${(importRequirement / 1000).toFixed(1)}M MT`;
    
    if (costImpactEl) {
      if (costImpact < 0) {
        costImpactEl.textContent = `$${Math.abs(costImpact / 1000000).toFixed(1)}B savings`;
        costImpactEl.style.color = '#00e676'; // Success color
      } else {
        costImpactEl.textContent = `$${(costImpact / 1000000).toFixed(1)}B additional cost`;
        costImpactEl.style.color = '#f44336'; // Error color
      }
    }
    
    if (selfSufficiencyEl) selfSufficiencyEl.textContent = `${selfSufficiency.toFixed(0)}%`;
  }

  // Initialize with current value
  updateScenario(parseInt(slider.value));

  // Update on slider change
  slider.addEventListener('input', function() {
    const value = parseInt(this.value);
    updateScenario(value);
    
    // Add visual feedback
    this.style.background = `linear-gradient(to right, #1FB8CD 0%, #1FB8CD ${((value - 10) / 20) * 100}%, #e0e0e0 ${((value - 10) / 20) * 100}%, #e0e0e0 100%)`;
  });

  // Set initial slider background
  const initialValue = parseInt(slider.value);
  slider.style.background = `linear-gradient(to right, #1FB8CD 0%, #1FB8CD ${((initialValue - 10) / 20) * 100}%, #e0e0e0 ${((initialValue - 10) / 20) * 100}%, #e0e0e0 100%)`;
  
  console.log('Blending slider initialized successfully');
}

// NEW: Country Tabs Functionality
function initializeCountryTabs() {
  console.log('Initializing country tabs...');
  
  const countryTabs = document.querySelectorAll('.country-tab');
  const countryDetails = document.querySelectorAll('.country-detail');

  countryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetCountry = tab.getAttribute('data-country');
      
      // Remove active class from all tabs and details
      countryTabs.forEach(t => t.classList.remove('active'));
      countryDetails.forEach(detail => detail.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding detail
      tab.classList.add('active');
      const targetDetail = document.getElementById(targetCountry + '-detail');
      if (targetDetail) {
        targetDetail.classList.add('active');
      }
    });
  });
}

// NEW: Arbitrage Calculator
function initializeArbitrageCalculator() {
  console.log('Initializing arbitrage calculator...');
  
  const originSelect = document.getElementById('origin-select');
  const destinationSelect = document.getElementById('destination-select');
  const resultEl = document.getElementById('arbitrage-result');

  if (!originSelect || !destinationSelect || !resultEl) {
    console.log('Arbitrage calculator elements not found');
    return;
  }

  function calculateArbitrage() {
    const originPrice = parseFloat(originSelect.value);
    const destinationPrice = parseFloat(destinationSelect.value);
    const arbitrage = destinationPrice - originPrice;
    
    resultEl.textContent = `$${arbitrage.toFixed(2)}/MT`;
    
    if (arbitrage > 0) {
      resultEl.style.color = '#00e676'; // Success color
    } else {
      resultEl.style.color = '#f44336'; // Error color
    }
  }

  // Calculate initial arbitrage
  calculateArbitrage();

  // Update on change
  originSelect.addEventListener('change', calculateArbitrage);
  destinationSelect.addEventListener('change', calculateArbitrage);
  
  console.log('Arbitrage calculator initialized successfully');
}

// Add hover effects to metric cards (EXISTING)
document.addEventListener('DOMContentLoaded', function() {
  const metricCards = document.querySelectorAll('.metric-card');
  
  metricCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1.02)';
      this.style.boxShadow = '0 10px 25px rgba(31, 184, 205, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = 'var(--shadow-md)';
    });
  });
});

// Error handling
window.addEventListener('error', function(e) {
  console.error('Dashboard Error:', e.error);
});

console.log('📊 Enhanced APAC Ethanol Market Intelligence Dashboard loaded successfully');