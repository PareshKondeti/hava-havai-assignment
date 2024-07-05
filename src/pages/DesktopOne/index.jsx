import React from "react";
import { Helmet } from "react-helmet";
import { Text, CheckBox, Heading, Img, Button } from "../../components"; // Fixed import of Img
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [
    { headerRow1: "Indra Gandhi International Airport", headerRow2: "India", headerRow3: "DEL", headerRow4: "3" },
    { headerRow1: "Dubai International Airport", headerRow2: "UAE", headerRow3: "DXB", headerRow4: "5" },
    { headerRow1: "Heathrow Airport", headerRow2: "England", headerRow3: "LHR", headerRow4: "6" },
    { headerRow1: "Istanbul Airport", headerRow2: "Turkey", headerRow3: "IST", headerRow4: "3" },
    { headerRow1: "Rajiv Gandhi International Airport", headerRow2: "Texas", headerRow3: "DFW", headerRow4: "14" }
  ];

  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
  
    return [
      tableColumnHelper.accessor("headerRow1", {
        cell: (info) => (
          <div className="flex justify-center md:p-5">
            <CheckBox
              name="Checkbox"
              label=""
              id="Checkbox4"
              checked={info.row?.headerRow1}
              className="rounded-sn border-2 border-solid border-light-gray-gray_76e bg-light-gray-gray_75"
            />
          </div>
        ),
        header: (info) => (
          <div className="flex self-center md:p-5">
            <Img src="images/ing_table_header.svg" alt="header icon" className="w-full lg:h-auto" />
          </div>
        ),
        meta: { width: "48px" }
      }),
      // Repeat similar corrections for other columns like headerRow2, headerRow3, headerRow4
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Explore Our Comprehensive Airport List - Find Your Destination</title>
        <meta
          name="description"
          content="Discover detailed information on top airports like Indra Gandhi International, Dubai International, and Heathrow."
        />
      </Helmet>
  
      <div className="w-full bg-light-gray-gray_56">
        <Header />
        <div className="flex items-start gap-10">
          <Sidebar1 />
          <div className="mt-30px flex flex-1 flex-col items-start gap-6">
            <div className="flex w-92% items-start lg:w-full lg:p-5 md:w-full md:p-5">
              <div className="flex flex-1 self-end">
                <Heading size="headingxs" as="h1">
                  Airports
                </Heading>
              </div>
              <Button shape="round" className="mb-1.5 min-w-[96px]">
                + Add new
              </Button>
            </div>
  
            <ReactTable
              bodyProps={{ className: "" }}
              headerProps={{ className: "md:flex-col" }} // Corrected typo in prop name
              rowProps={{ className: "md:flex-col" }} // Corrected typo in prop name
              className="md:whitespace-no-wrap w-92% md:block md:overflow-x-auto"
              columns={tableColumns}
              data={tableData}
            />
          </div>
        </div>
      </div>
    </>
  );
  