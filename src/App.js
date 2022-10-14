import './App.css';
import {gql, useQuery} from "@apollo/client";
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container, Link,
    List,
    ListItem,
    Toolbar,
    Typography
} from "@mui/material";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {Email, GitHub, LinkedIn, Work} from "@mui/icons-material";
import {JobResume} from "./JobResume";

const PAGE_QUERY = gql`
  query BaseInfo {
     pageCollection {
        total
        items {
            name
            smallName
            picture {
                title
                description
                contentType               
                url               
            }
            aboutMe {
                json
            }
            smallName
            coveoJob
            coveoInfo
            coveoShortInfo
            coveoMoreDetails
            gotoJob
            gotoInfo
            gotoShortInfo
            gotoMoreDetails
            email
            github
            linkedin
            githubLink
            linkedinLink
        }
    }
  }
 `;

function App() {
  const {data, loading} = useQuery(PAGE_QUERY);
  const navItems = ['About me', 'Resume', 'Contact'];

  if (loading) {
    return "Loading...";
  }
  const page = data.pageCollection?.items?.[0];
    return (
      <div id={navItems[0]}>
          <header>
                  <AppBar component="nav" color="transparent">
                      <Toolbar>
                          <Container maxWidth="md" sx={{ display: "flex" }}>
                              <Typography variant="h4" component="div" sx={{ color: '#613659',flexGrow: 1, display: { sm: 'block' } }} style={{fontFamily: "lemonJelly"}}>{page.smallName}</Typography>
                              <Box sx={{ display: { sm: 'block' } }}>
                                  {navItems.map((item) => (
                                      <Button key={item} sx={{ color: '#613659' }} href={`#${item}`} >
                                          <Typography>{item}</Typography>
                                      </Button>
                                  ))}
                              </Box>
                          </Container>
                      </Toolbar>
                  </AppBar>
          </header>
          <section>
              <Container className="about-me" maxWidth="md" sx={{marginY: 15, paddingY: 15, display: 'flex'}}>
                  <Typography className="remove-p-margin" sx={{ padding: 0, fontSize: "1.8rem", margin: 0}}>
                      {documentToReactComponents(page.aboutMe.json)}
                  </Typography>
                  <Avatar className="about-me-avatar" src={page.picture.url} alt="profile" sx={{ width: 350, height: 350 }} />
              </Container>
              <Container id={navItems[1]} maxWidth="md" sx={{marginY: 15, paddingY: 15}} style={{paddingLeft: 0, paddingRight: 0}}>
                  <VerticalTimeline
                      layout={"1-column-left"}
                  >
                      <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          contentStyle={{ background: '#613659', color: '#fff' }}
                          contentArrowStyle={{ borderRight: '7px solid  #613659' }}
                          date={<Typography variant="h6" color="#E3E8E9" style={{marginTop: 0}}>Feb 2021 - Present</Typography>}
                          iconStyle={{ background: '#fff', color: '#613659', border: 'none' }}
                          icon={<Work />}
                      >
                          <Typography variant="h5" color="#E3E8E9">{page.gotoInfo}</Typography>
                          <Typography variant="h6" color="#F5F5F5">{page.gotoJob}</Typography>
                          <List>
                              {page.gotoShortInfo.map((info, num) => {
                                  return (<ListItem key={`goto-info-${num}`} >
                                      <Typography color="#E3E8E9" style={{marginTop: 0}}>{info}</Typography>
                                  </ListItem>)
                              })}
                          </List>
                          <JobResume details={page.gotoMoreDetails.details} id="goto" buttonTitle="More details" buttonColor="darkButton"/>
                      </VerticalTimelineElement>
                      <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          contentStyle={{border: '1px solid #4C5270'}}
                          contentArrowStyle={{ borderRight: '7px solid  #4C5270' }}
                          date={<Typography variant="h6" style={{marginTop: 0}}>Jun 2015 - Feb 2021</Typography>}
                          iconStyle={{ background: '#613659', color: '#fff' }}
                          icon={<Work />}
                      >
                          <Typography variant="h5">{page.coveoInfo}</Typography>
                          <Typography variant="h6" style={{color: "#613659"}}>{page.coveoJob}</Typography>
                          <List>
                          {page.coveoShortInfo.map((info, num) => {
                              return (<ListItem key={`coveo-info-${num}`} >
                                  <Typography style={{marginTop: 0}}>{info}</Typography>
                              </ListItem>)
                          })}
                          </List>
                          <JobResume details={page.coveoMoreDetails.details} id="coveo" buttonTitle="More details" buttonColor="whiteButton"/>
                      </VerticalTimelineElement>
                  </VerticalTimeline>
              </Container>
              <Container id={navItems[2]} maxWidth="md" sx={{marginTop: 15, marginBottom: 15}}>
                  <Box color="#613659" sx={{display: "flex", alignItems: "center", justifyContent: ''}}>
                      <Email/>
                      <Link underline="none" color="#613659" sx={{marginLeft: 1}} href={`mailto:${page.email}`} target="_blank">{page.email}</Link>
                      <Link underline="hover" color="#613659" href={page.githubLink} target="_blank"><Box sx={{display: "flex", alignItems: "center"}}><GitHub sx={{marginLeft: 3, marginRight: 1}}/>{page.github}</Box></Link>
                      <Link underline="hover" color="#613659" href={page.linkedinLink} target="_blank"><Box sx={{display: "flex", alignItems: "center"}}><LinkedIn sx={{marginLeft: 3, marginRight: 1}}/>{page.linkedin}</Box></Link>
                  </Box>
              </Container>
          </section>
      </div>
  );
}

export default App;
