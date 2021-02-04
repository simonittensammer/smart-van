package at.htl.boundary;

import at.htl.control.MeasurementRepository;
import at.htl.entity.Measurement;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
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
    public List<Measurement> getAll() {
        return mr.listAll();
    }

    @POST
    public Response addMeasurement(Measurement measurement) {
        mr.persist(measurement);
        return Response.ok(measurement).build();
    }
}
