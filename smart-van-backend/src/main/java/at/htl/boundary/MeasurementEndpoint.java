package at.htl.boundary;

import at.htl.control.MeasurementRepository;
import at.htl.entity.Measurement;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/measurement")
@ApplicationScoped
@Transactional
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class MeasurementEndpoint {

    @Inject
    MeasurementRepository mr;

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public List<Measurement> getAll() {
        return mr.listAll();
    }
}
