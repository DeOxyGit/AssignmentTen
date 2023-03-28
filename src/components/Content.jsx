import { Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import { Grid, Card } from "@mui/material";
import { CardMedia, CardContent } from "@mui/material";
function Content () {
  return (
    <Grid direction="column" marginTop={4} >
    <Box>
        <Typography variant="h4" mb={3}>
            Welcome to My Website
        </Typography>
        <Typography variant="body1" mb={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, ut excepturi ex doloribus sint ducimus nobis
            eius, illum dignissimos delectus eligendi voluptates
            incidunt consectetur a facere placeat omnis eum voluptas
            saepe itaque? Ab facere odit vero autem.
        </Typography>

        <Typography variant="body1" mb={3}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Assumenda fugit non eius iusto dicta possimus, quisquam
            nihil amet at adipisci, veniam tenetur repudiandae saepe
            laboriosam dolorum illo! Animi harum quibusdam consequuntur
            totam! Ipsum, soluta nemo?
        </Typography>
    </Box>

    <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6}>
            <Card>
                <CardMedia
                    sx={{ height: 180 }}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_3vmBGXQpthI6JSd7iWuOH5ok_Rd-QcwlsA&usqp=CAU"
                    title="Pom1"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        ป้อมรักชาติ
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
                        quidem nesciunt dolore inventore soluta aliquid architecto iste
                        quo provident rem error repudiandae quasi deleniti. Nisi quae odit
                        laborum voluptate temporibus, quia optio molestias.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

        <Grid item  xs={12} sm={6} md={6}>
        <Card>
                <CardMedia
                    sx={{ height: 180 }}
                    image="https://www.matichonweekly.com/wp-content/uploads/2021/12/messageImage_1640325097228.jpg"
                    title="Pom2"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        ป้อมรักเพื่อน
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
                        quidem nesciunt dolore inventore soluta aliquid architecto iste
                        quo provident rem error repudiandae quasi deleniti. Nisi quae odit
                        laborum voluptate temporibus, quia optio molestias.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
            
        <Grid item  xs={12} sm={6} md={6}>
            <Card>
                <CardMedia
                    sx={{ height: 180 }}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAIvHN8AVQ8Ikk4FFTo2ULFA2ux8E0mmFXYA71gkGbs-d_FDNklwHqPj9ffYTd7jJZ5r4&usqp=CAU"
                    title="Pom3"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        ป้อมโมโห
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
                        quidem nesciunt dolore inventore soluta aliquid architecto iste
                        quo provident rem error repudiandae quasi deleniti. Nisi quae odit
                        laborum voluptate temporibus, quia optio molestias.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
</Grid>
  );
};

export default Content;