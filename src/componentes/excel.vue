<template>
    <div>
        <ExportExcelSheetVueJs
        :sheetData="sheetrows"
        :columns="columns"
        :filename="filename"
        :sheetname="sheetname"
        >
            Download
        </ExportExcelSheetVueJs>
    </div>
</template>
<script>
    export default{
        data:() => ({
            columns : [
                {
                    label: "Student Name",
                    field: "studentName",
                },
                {
                    label: "Registration Number / PRN",
                    field: "regno",
                },
            ],
            data : [
                {
                    studentName: "Dhanesh Pawar",
                    regno: 10,
                },
                {
                    studentName: "Student two name",
                    regno: 30,
                }
            ],
        }),
    }
</script>